#!/usr/bin/env node
/**
 * 本地项目服务管理器
 *
 * 用法：
 *   node service-manager.cjs              交互式菜单（推荐，或双击 service-manager.bat）
 *   node service-manager.cjs monitor      独立监测窗口模式（或双击 service-monitor.bat）
 *   node service-manager.cjs status       查看所有服务状态
 *   node service-manager.cjs start <名称|all>
 *   node service-manager.cjs stop <名称|all>
 *   node service-manager.cjs restart <名称|all>
 *   node service-manager.cjs open <名称>    在浏览器打开
 *   node service-manager.cjs logs <名称>    查看最近日志
 *   node service-manager.cjs logs <名称> -f 实时跟踪日志
 *   node service-manager.cjs adopt <名称|all>  接管外部进程（结束旧终端窗口里的进程，转为管理器后台运行）
 *
 * 所有服务都以无窗口后台方式运行，日志落在 .service-manager\logs\，
 * 在管理器窗口里按键 l/f 即可实时查看——不再需要为看日志保留任何终端窗口。
 *
 * Discord bot 监测原理：Receipt Organizer 的仪表盘进程与 Discord 网关之间
 * 保持一条 443 端口的 TCP 长连接，通过 netstat 检查该连接判断 bot 是否在线；
 * 未连接时再结合日志区分“未启用 token”等情形。
 *
 * 日志与进程记录保存在 .service-manager\ 目录下，可随时删除。
 */
const { spawn, exec, execFile } = require('node:child_process');
const net = require('node:net');
const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');
const { isSea } = require('node:sea');

// 是否以打包后的单文件 exe 运行（node --experimental-sea-config 构建）
const IS_SEA = (() => {
  try {
    return isSea();
  } catch {
    return false;
  }
})();

// 项目根目录：平时是脚本所在目录；打包成 exe 后是 exe 所在目录。
// exe 放在项目根目录下运行即可，也可以用环境变量 SERVICE_MANAGER_ROOT 指定。
const ROOT = process.env.SERVICE_MANAGER_ROOT
  ? path.resolve(process.env.SERVICE_MANAGER_ROOT)
  : (() => {
      try {
        if (typeof __filename === 'string' && fs.existsSync(__filename)) {
          return path.dirname(__filename);
        }
      } catch (err) {
        // SEA 模式下 __filename 不可用
      }
      return path.dirname(process.execPath);
    })();

const STATE_DIR = path.join(ROOT, '.service-manager');
const LOG_DIR = path.join(STATE_DIR, 'logs');
const RUN_DIR = path.join(STATE_DIR, 'run');
const STATE_FILE = path.join(STATE_DIR, 'state.json');

// ===================== 服务配置（在这里增删项目）=====================
// command 在项目目录（dir）下执行；ports 用于探测是否已启动；url 是浏览器入口。
// waitMs 是启动后的等待时长（Python 项目加载依赖较慢，需要更久）。
// discordBot: true 表示该项目带 Discord bot，需要监测 bot 在线状态。
// lanCommand / lanUrl 表示该项目支持局域网启动模式，{ip} 会替换为本机局域网 IP。
const services = [
  {
    name: 'clientcore',
    label: 'ClientCore',
    desc: '客户管理系统 · 前端 + API',
    dir: 'ClientCore',
    command: 'npm run dev:all',
    ports: [5173, 5174],
    url: 'http://127.0.0.1:5173',
    waitMs: 15000,
    lanCommand: 'npm run dev:lan',
    lanUrl: 'https://{ip}:5173',
  },
  {
    name: 'receipt',
    label: 'Receipt Organizer',
    desc: '收据管家 · 仪表盘 + Discord 机器人',
    dir: 'receipt organizer',
    command: '.venv\\Scripts\\python.exe -m receipt_organizer --base-dir . serve',
    ports: [8765],
    url: 'http://127.0.0.1:8765',
    waitMs: 12000,
    discordBot: true,
  },
  {
    name: 'ams',
    label: 'AMS',
    desc: '保险代理管理系统 · 静态页面',
    dir: 'AMS',
    command: 'python -m http.server 8100 --bind 127.0.0.1',
    ports: [8100],
    url: 'http://127.0.0.1:8100/ams_dashboard.html',
  },
  {
    name: 'ams-master',
    label: 'AMS-master',
    desc: 'AMS 旧版本 · 静态页面',
    dir: 'AMS-master',
    command: 'python -m http.server 8101 --bind 127.0.0.1',
    ports: [8101],
    url: 'http://127.0.0.1:8101/ams_dashboard.html',
  },
  {
    name: 'quote-form',
    label: 'CanTrust 报价表单',
    desc: '静态页面',
    dir: 'cantrust-quote-form',
    command: 'python -m http.server 8102 --bind 127.0.0.1',
    ports: [8102],
    url: 'http://127.0.0.1:8102/',
  },
];

// ---------------- 基础工具 ----------------
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 本机局域网 IP（可用 CLIENTCORE_LAN_HOST / LAN_HOST 环境变量指定）。
// 评分规则与 ClientCore 的 scripts/lan-dev-config.js 保持一致：
// 优先真实网卡（Wi-Fi/192.168），排除虚拟网卡（WSL/Hyper-V/Docker/VPN）。
function getLanIp() {
  const os = require('node:os');
  const explicit = process.env.CLIENTCORE_LAN_HOST || process.env.LAN_HOST;
  if (explicit) return explicit;
  const score = (name, address) => {
    const n = name.toLowerCase();
    let s = 0;
    if (/(wi-?fi|wireless|wlan)/.test(n)) s += 100;
    if (address.startsWith('192.168.')) s += 30;
    if (/^172\.(1[6-9]|2\d|3[01])\./.test(address)) s += 20;
    if (address.startsWith('10.')) s += 10;
    if (/(vpn|nord|openvpn|wireguard|tailscale|zerotier)/.test(n)) s -= 80;
    if (/(vethernet|virtual|vmware|hyper-v|wsl|docker)/.test(n)) s -= 80;
    return s;
  };
  let best = null;
  let bestScore = -Infinity;
  for (const [name, addresses] of Object.entries(os.networkInterfaces())) {
    for (const address of addresses || []) {
      if (address.internal || address.family !== 'IPv4') continue;
      if (address.address.startsWith('127.') || address.address.startsWith('169.254.')) continue;
      const s = score(name, address.address);
      if (s > bestScore) {
        bestScore = s;
        best = address.address;
      }
    }
  }
  return best || '127.0.0.1';
}

// 按启动模式返回入口地址
function displayUrl(service, mode) {
  if (mode === 'lan' && service.lanUrl) return service.lanUrl.replace('{ip}', getLanIp());
  return service.url;
}

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function saveState(state) {
  fs.mkdirSync(STATE_DIR, { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function pidAlive(pid) {
  if (!pid) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (err) {
    return err.code === 'EPERM';
  }
}

function probePort(port, host = '127.0.0.1', timeout = 500) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(timeout);
    const finish = (ok) => {
      socket.destroy();
      resolve(ok);
    };
    socket.once('connect', () => finish(true));
    socket.once('timeout', () => finish(false));
    socket.once('error', () => finish(false));
    socket.connect(port, host);
  });
}

async function getServiceStatus(service) {
  const saved = loadState()[service.name];
  const lanMode = saved?.mode === 'lan' && service.lanUrl;
  // 局域网模式下服务可能只绑定局域网 IP（如 vite --host <lan-ip>），两个地址都探测
  const hosts = lanMode ? ['127.0.0.1', getLanIp()] : ['127.0.0.1'];
  const portChecks = [];
  for (const port of service.ports) {
    const results = await Promise.all(hosts.map((host) => probePort(port, host)));
    portChecks.push({ port, up: results.some(Boolean) });
  }
  return {
    service,
    portChecks,
    anyUp: portChecks.some((c) => c.up),
    // 是否由管理器启动：以 state 记录为准。不依赖 spawn 返回的 PID——
    // Windows 下 cmd 包装进程可能先于服务进程退出，PID 会失联。
    tracked: Boolean(saved),
    pid: saved?.pid,
    // 启动模式：local = 仅本机，lan = 局域网可访问
    mode: saved?.mode === 'lan' ? 'lan' : 'local',
  };
}

async function getAllStatus() {
  return Promise.all(services.map((service) => getServiceStatus(service)));
}

// ---------------- Discord bot 监测 ----------------
function runNetstat() {
  return new Promise((resolve) => {
    if (process.platform !== 'win32') return resolve(null);
    execFile('netstat', ['-ano', '-p', 'tcp'], { maxBuffer: 16 * 1024 * 1024 }, (err, stdout) => {
      resolve(err ? null : stdout);
    });
  });
}

function parseNetstatLines(text) {
  const rows = [];
  for (const line of String(text || '').split(/\r?\n/)) {
    const match = /^\s*TCP\s+(\S+)\s+(\S+)\s+(\S+)\s+(\d+)\s*$/.exec(line);
    if (match) rows.push({ local: match[1], foreign: match[2], state: match[3], pid: Number(match[4]) });
  }
  return rows;
}

function findPortOwnerPid(rows, port) {
  // 匹配任意本地地址上的监听（0.0.0.0 / 127.0.0.1 / 局域网 IP / IPv6 都可能）
  for (const row of rows) {
    if (row.state === 'LISTENING' && row.local.endsWith(`:${port}`)) return row.pid;
  }
  return null;
}

const LOOPBACK_PREFIXES = ['127.', '[::1]', '0.0.0.0', '[::]'];

function hasRemoteTlsConnection(rows, pid) {
  return rows.some(
    (row) =>
      row.pid === pid &&
      row.state === 'ESTABLISHED' &&
      row.foreign.endsWith(':443') &&
      !LOOPBACK_PREFIXES.some((prefix) => row.foreign.startsWith(prefix)),
  );
}

async function getDiscordBotStatus(service) {
  const dashboardUp = await probePort(service.ports[0]);
  if (!dashboardUp) {
    return { state: 'down', text: '服务未运行' };
  }
  const rows = parseNetstatLines(await runNetstat());
  if (!rows) {
    return { state: 'unknown', text: `仪表盘运行中 · bot 状态无法监测（仅支持 Windows）` };
  }
  const pid = findPortOwnerPid(rows, service.ports[0]);
  if (pid && hasRemoteTlsConnection(rows, pid)) {
    return { state: 'connected', text: `仪表盘运行中 · Discord bot 已连接 (PID ${pid})` };
  }
  const logText = tailLog(service.name, 500).join('\n');
  if (/DISCORD_TOKEN is empty/.test(logText) && !/Discord bot connected/.test(logText)) {
    return { state: 'disabled', text: '仪表盘运行中 · Discord bot 未启用（DISCORD_TOKEN 为空）' };
  }
  return {
    state: 'disconnected',
    text: `仪表盘运行中 · Discord bot 未连接（可能正在重连${pid ? `，PID ${pid}` : ''}）`,
  };
}

async function getBotBadges() {
  const badges = {};
  for (const service of services) {
    if (!service.discordBot) continue;
    const bot = await getDiscordBotStatus(service);
    const badgeByState = {
      connected: 'Discord✔',
      disconnected: 'Discord✘',
      disabled: 'Discord未启用',
      unknown: 'Discord?',
    };
    const badge = badgeByState[bot.state];
    if (badge) badges[service.name] = badge;
  }
  return badges;
}

// ---------------- 启动 / 停止 ----------------
// 启动方式：为每个服务生成一个 .cmd 启动脚本（cd 到项目目录、输出重定向到日志），
// 再用 cmd /c 执行它。重定向写在批处理内部，路径含空格也能正确解析；
// 不经由 Node 传文件句柄（Windows 下句柄跨进程继承有竞态，会丢输出）。
function writeRunScript(service, command = service.command) {
  fs.mkdirSync(RUN_DIR, { recursive: true });
  fs.mkdirSync(LOG_DIR, { recursive: true });
  const scriptPath = path.join(RUN_DIR, `${service.name}.cmd`);
  const logPath = path.join(LOG_DIR, `${service.name}.log`);
  const cwd = path.join(ROOT, service.dir);
  const lines = [
    '@echo off',
    `cd /d "${cwd}"`,
    `echo ===== %date% %time% start: ${command} =====>> "${logPath}"`,
    `${command} >> "${logPath}" 2>&1`,
  ];
  fs.writeFileSync(scriptPath, lines.join('\r\n') + '\r\n', 'ascii');
  return { scriptPath, logPath };
}

// mode: 'local'（默认，仅本机）或 'lan'（局域网可访问，需服务配置了 lanCommand）
function startService(service, mode = 'local') {
  const command = mode === 'lan' && service.lanCommand ? service.lanCommand : service.command;
  const { scriptPath, logPath } = writeRunScript(service, command);
  // 注意不要加 detached: true —— Windows 上子进程本来就独立于父进程存活，
  // 而 detached + 隐藏窗口组合会让输出重定向在进程链中丢失（实测）。
  const child = spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/c', scriptPath], {
    cwd: path.join(ROOT, service.dir),
    windowsHide: true,
    stdio: 'ignore',
  });
  child.unref();
  const state = loadState();
  state[service.name] = {
    pid: child.pid,
    command,
    mode,
    startedAt: new Date().toISOString(),
    log: logPath,
  };
  saveState(state);
  return child.pid;
}

function killTree(pid) {
  return new Promise((resolve) => {
    if (process.platform === 'win32') {
      exec(`taskkill /PID ${pid} /T /F`, () => resolve());
    } else {
      try {
        process.kill(-pid, 'SIGTERM');
      } catch {
        try {
          process.kill(pid, 'SIGTERM');
        } catch {
          // 进程已退出
        }
      }
      resolve();
    }
  });
}

async function stopService(status) {
  const { service } = status;
  const state = loadState();
  delete state[service.name];
  saveState(state);

  // 通过端口反查实际服务进程并连树结束，不依赖可能已失联的包装进程 PID
  const rows = parseNetstatLines(await runNetstat());
  const pids = [...new Set(service.ports.map((p) => findPortOwnerPid(rows, p)).filter(Boolean))];
  if (pids.length) {
    for (const pid of pids) await killTree(pid);
    for (let i = 0; i < 3; i++) {
      await sleep(800);
      const still = await getServiceStatus(service);
      if (!still.anyUp) break;
      const rows2 = parseNetstatLines(await runNetstat());
      for (const pid of [...new Set(service.ports.map((p) => findPortOwnerPid(rows2, p)).filter(Boolean))]) {
        await killTree(pid);
      }
    }
    return `已停止 ${service.label}（结束进程 ${pids.join(', ')}）`;
  }
  if (pidAlive(status.pid)) {
    await killTree(status.pid);
    return `已停止 ${service.label} (PID ${status.pid})`;
  }
  return `${service.label} 本来就没有在运行`;
}

async function startAndWait(service, defaultWaitMs = 3000, mode = 'local') {
  if (mode === 'lan' && !service.lanCommand) {
    console.log(`  ${service.label} 不支持局域网模式`);
    return;
  }
  const waitMs = service.waitMs ?? defaultWaitMs ?? 3000;
  const before = await getServiceStatus(service);
  const url = displayUrl(service, mode);
  if (before.anyUp) {
    console.log(`  ${service.label} 已经在运行 (${displayUrl(service, before.mode)})`);
    return;
  }
  const pid = startService(service, mode);
  console.log(`  正在启动 ${service.label}${mode === 'lan' ? '（局域网模式）' : ''} (PID ${pid}) ...`);
  await sleep(waitMs);
  const after = await getServiceStatus(service);
  if (after.anyUp) {
    console.log(`  ✓ ${service.label} 已启动: ${url}`);
  } else {
    console.log(`  ✗ ${service.label} 启动后端口未就绪，最近日志：`);
    for (const line of tailLog(service.name, 10)) console.log(`    | ${line}`);
  }
}

// 静默切换（监测窗口用）：不打印，返回结果文本
async function toggleServiceQuiet(service, defaultWaitMs = 2500) {
  const status = await getServiceStatus(service);
  if (status.anyUp) return stopService(status);
  startService(service);
  await sleep(service.waitMs ?? defaultWaitMs);
  const after = await getServiceStatus(service);
  return after.anyUp
    ? `✓ ${service.label} 已启动 ${service.url}`
    : `✗ ${service.label} 启动失败（按 l+编号 查看日志）`;
}

// 静默局域网启动（GUI/接口/监测窗口用）
async function startLanQuiet(service) {
  if (!service.lanCommand) return `✗ ${service.label} 不支持局域网模式`;
  const status = await getServiceStatus(service);
  if (status.anyUp) {
    return `${service.label} 已在运行，如需切换为局域网模式请先停止`;
  }
  startService(service, 'lan');
  await sleep(service.waitMs ?? 6000);
  const after = await getServiceStatus(service);
  return after.anyUp
    ? `✓ ${service.label} 已启动（局域网）${displayUrl(service, 'lan')}`
    : `✗ ${service.label} 局域网启动失败，请查看日志`;
}

// 接管外部进程：结束占用端口的旧进程（通常是某个终端窗口里手动启动的），
// 改由管理器以无窗口后台方式重新拉起。返回结果文本。
async function takeoverService(service) {
  const waitMs = service.waitMs ?? 3000;
  let status = await getServiceStatus(service);
  if (!status.anyUp) return `${service.label} 没有在运行，无需接管（直接启动即可）`;
  if (status.tracked) return `${service.label} 已经由管理器管理`;
  if (process.platform !== 'win32') return '仅 Windows 支持接管外部进程';
  const mode = (loadState()[service.name]?.mode === 'lan' && service.lanCommand) ? 'lan' : 'local';

  for (let attempt = 0; attempt < 3; attempt++) {
    const rows = parseNetstatLines(await runNetstat());
    const pids = [...new Set(service.ports.map((p) => findPortOwnerPid(rows, p)).filter(Boolean))];
    if (!pids.length) break;
    for (const pid of pids) await killTree(pid);
    await sleep(1000);
  }
  status = await getServiceStatus(service);
  if (status.anyUp) {
    return `✗ 端口仍被占用，${service.label} 接管失败，请手动关闭外部进程后重试`;
  }
  await sleep(2000); // 等旧进程树彻底退场，避免新实例撞上残留进程
  startService(service, mode);
  await sleep(waitMs);
  const after = await getServiceStatus(service);
  return after.anyUp
    ? `✓ 已接管 ${service.label}：外部进程已结束，现在由管理器后台运行 ${displayUrl(service, mode)}`
    : `✗ ${service.label} 接管后启动失败，请查看日志`;
}

// ---------------- 浏览器 / 日志 ----------------
function openUrl(url) {
  if (process.platform === 'win32') exec(`start "" "${url}"`);
  else if (process.platform === 'darwin') exec(`open "${url}"`);
  else exec(`xdg-open "${url}"`);
}

function tailLog(name, lines = 30) {
  const logPath = path.join(LOG_DIR, `${name}.log`);
  if (!fs.existsSync(logPath)) return ['（还没有日志）'];
  const content = fs.readFileSync(logPath, 'utf8').trimEnd();
  if (!content) return ['（日志为空）'];
  return content.split(/\r?\n/).slice(-lines);
}

// 实时跟踪日志：先显示最近内容，之后每秒追加新输出，任意键退出。
// 替代“为看输出保留一个终端窗口”的旧习惯。
async function followLogView(service) {
  const logPath = path.join(LOG_DIR, `${service.name}.log`);
  const stdin = process.stdin;
  if (!stdin.isTTY || !process.stdout.isTTY) {
    console.log(`\n  ${service.label} 最近日志：`);
    for (const line of tailLog(service.name, 30)) console.log(`  | ${line}`);
    console.log('  （当前环境不支持实时跟踪）');
    return;
  }
  readline.emitKeypressEvents(stdin);
  if (stdin.setRawMode) stdin.setRawMode(true);

  console.clear();
  console.log(`  ${service.label} 实时日志（任意键返回）\n`);
  for (const line of tailLog(service.name, 25)) console.log(`  | ${line}`);
  let offset = fs.existsSync(logPath) ? fs.statSync(logPath).size : 0;

  await new Promise((resolve) => {
    let done = false;
    const timer = setInterval(() => {
      if (done) return;
      try {
        if (!fs.existsSync(logPath)) {
          offset = 0;
          return;
        }
        const size = fs.statSync(logPath).size;
        if (size < offset) offset = 0; // 日志文件被重建
        if (size > offset) {
          const fd = fs.openSync(logPath, 'r');
          const buffer = Buffer.alloc(size - offset);
          fs.readSync(fd, buffer, 0, buffer.length, offset);
          fs.closeSync(fd);
          offset = size;
          const text = buffer.toString('utf8');
          if (text.trim()) {
            process.stdout.write(text.split(/\r?\n/).map((l) => `  | ${l}`).join('\n') + '\n');
          }
        }
      } catch {
        // 读取竞争时跳过这一轮
      }
    }, 1000);
    const onKey = () => {
      if (done) return;
      done = true;
      clearInterval(timer);
      stdin.removeListener('keypress', onKey);
      resolve();
    };
    stdin.on('keypress', onKey);
  });
  if (stdin.setRawMode) stdin.setRawMode(false);
}

// ---------------- 展示 ----------------
// ANSI 颜色与中英文混排对齐工具
const USE_COLOR = process.stdout.isTTY && !process.env.NO_COLOR;
const color = (code) => (text) => (USE_COLOR ? `\x1b[${code}m${text}\x1b[0m` : String(text));
const style = {
  bold: color('1'),
  dim: color('2'),
  green: color('32'),
  red: color('31'),
  yellow: color('33'),
  cyan: color('36'),
  gray: color('90'),
};

// 计算终端显示宽度（中文等全角字符算 2 列），用于对齐
function displayWidth(text) {
  let width = 0;
  for (const ch of String(text)) {
    const cp = ch.codePointAt(0);
    const wide =
      (cp >= 0x1100 && cp <= 0x115f) ||
      (cp >= 0x2e80 && cp <= 0xa4cf) ||
      (cp >= 0xac00 && cp <= 0xd7a3) ||
      (cp >= 0xf900 && cp <= 0xfaff) ||
      (cp >= 0xfe30 && cp <= 0xfe4f) ||
      (cp >= 0xff00 && cp <= 0xff60) ||
      (cp >= 0xffe0 && cp <= 0xffe6) ||
      (cp >= 0x20000 && cp <= 0x3fffd);
    width += wide ? 2 : 1;
  }
  return width;
}

function pad(text, width) {
  return String(text) + ' '.repeat(Math.max(0, width - displayWidth(text)));
}

function formatPorts(portChecks) {
  return portChecks
    .map((pc) => (pc.up ? style.green(`${pc.port} ✔`) : style.red(`${pc.port} ✘`)))
    .join('   ');
}

function printStatusTable(rows, badges = {}) {
  const labelW = Math.max(...rows.map((r) => displayWidth(r.service.label))) + 2;
  console.log('');
  console.log('  ' + style.bold('服务状态'));
  console.log('  ' + style.dim('─'.repeat(52)));
  rows.forEach((row, i) => {
    const { service, portChecks, anyUp, tracked, mode } = row;
    let badge = badges[service.name] || '';
    if (badge) badge = '   ' + (badge.includes('✔') ? style.green(badge) : style.yellow(badge));
    if (mode === 'lan') badge += '   ' + style.cyan('局域网');
    const stateText = anyUp
      ? tracked
        ? style.green('● 运行中')
        : style.yellow('● 运行中·外部')
      : style.gray('○ 已停止');
    console.log(
      `  ${style.gray(pad(`${i + 1}.`, 4))} ${stateText}  ${style.bold(pad(service.label, labelW))}${style.dim(service.desc)}`,
    );
    console.log(`       ${formatPorts(portChecks)}${badge}   ${style.dim(displayUrl(service, mode))}`);
  });
}

// 原地重绘：光标归位后逐行覆盖，不清屏，因此不闪烁
let screenLinesDrawn = 0;
function renderScreen(lines) {
  if (!process.stdout.isTTY) {
    console.log(lines.join('\n'));
    return;
  }
  const parts = ['\x1b[H'];
  const rows = Math.max(lines.length, screenLinesDrawn);
  for (let i = 0; i < rows; i++) {
    parts.push('\x1b[2K' + (i < lines.length ? lines[i] : ''));
    if (i < rows - 1) parts.push('\r\n');
  }
  screenLinesDrawn = lines.length;
  process.stdout.write(parts.join(''));
}

function buildMonitorLines(rows, badges, botLines, pending, message) {
  const L = [];
  const labelW = Math.max(...services.map((s) => displayWidth(s.label))) + 2;
  L.push('');
  L.push('  ' + style.bold('本地服务监测') + '    ' + style.dim(new Date().toLocaleString('zh-CN', { hour12: false })));
  L.push('  ' + style.dim('─'.repeat(56)));
  L.push('');
  rows.forEach((row, i) => {
    const { service, portChecks, anyUp, tracked, mode } = row;
    let badge = badges[service.name] || '';
    if (badge) badge = '   ' + (badge.includes('✔') ? style.green(badge) : style.yellow(badge));
    if (mode === 'lan') badge += '   ' + style.cyan('局域网');
    const icon = anyUp ? style.green('●') : style.gray('○');
    const ext = anyUp && !tracked ? '  ' + style.yellow('外部') : '';
    L.push(
      `  ${style.gray(pad(`${i + 1}.`, 4))} ${icon} ${style.bold(pad(service.label, labelW))}${style.dim(service.desc)}${ext}`,
    );
    L.push(`        ${formatPorts(portChecks)}${badge}`);
    L.push(`        ${style.dim(displayUrl(service, mode))}`);
    L.push('');
  });
  if (botLines.length) {
    L.push('  ' + style.dim('── Discord Bot ' + '─'.repeat(42)));
    L.push(...botLines);
    L.push('');
  }
  L.push('  ' + style.dim('─'.repeat(56)));
  L.push(
    '  ' +
      [
        style.bold('数字') + style.dim(' 启停'),
        style.bold('o+数字') + style.dim(' 网页'),
        style.bold('l+数字') + style.dim(' 日志'),
        style.bold('t+数字') + style.dim(' 接管'),
        style.bold('a') + style.dim(' 全启'),
        style.bold('x') + style.dim(' 全停'),
        style.bold('q') + style.dim(' 退出'),
      ].join(style.gray('  │  ')),
  );
  if (pending) {
    const label = { o: '打开网页', l: '实时日志', t: '接管外部进程', n: '局域网启动' }[pending];
    L.push('');
    L.push('  ' + style.cyan(`▸ 请输入编号（${label}）...`));
  }
  if (message) {
    L.push('');
    L.push(
      '  ' +
        (message.startsWith('✓')
          ? style.green(message)
          : message.startsWith('✗')
            ? style.red(message)
            : style.cyan(message)),
    );
  }
  return L;
}

function printMenuHelp() {
  console.log(`
  命令： 数字 = 启动/停止该服务 | n数字 = 局域网启动 | o数字 = 打开网页 | l数字 = 实时日志
         t数字 = 接管外部进程（转为管理器后台运行）
         a = 启动全部 | x = 停止全部 | w = 打开监测窗口 | r = 刷新状态 | q = 退出`);
}

// ---------------- 独立监测窗口 ----------------
function spawnMonitorWindow() {
  if (process.platform !== 'win32') {
    console.log('  仅 Windows 支持弹出独立窗口，请直接运行: node service-manager.cjs monitor');
    return;
  }
  const launcher = IS_SEA ? `"${process.execPath}" monitor` : 'node service-manager.cjs monitor';
  exec(`start "服务监测窗口" /D "${ROOT}" cmd /k ${launcher}`);
  console.log('  已打开独立监测窗口');
}

async function monitorMode() {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    const rows = await getAllStatus();
    printStatusTable(rows, await getBotBadges());
    console.log('\n  当前环境不支持实时刷新，请双击 service-monitor.bat 打开独立监测窗口。');
    return;
  }

  const stdin = process.stdin;
  readline.emitKeypressEvents(stdin);
  if (stdin.setRawMode) stdin.setRawMode(true);
  stdin.resume();

  // 全屏初始化：清一次屏、隐藏光标、关闭自动换行（之后刷新全部原地覆盖，不闪烁）
  const restoreScreen = () => {
    process.stdout.write('\x1b[?25h\x1b[?7h');
  };
  process.stdout.write('\x1b[2J\x1b[H\x1b[?25l\x1b[?7l');
  process.on('exit', restoreScreen);
  screenLinesDrawn = 0;

  let pending = null; // 'o' | 'l' | 't'，等待用户补一个数字
  let following = false; // 实时日志查看中，暂停自动刷新和按键
  let busy = false;
  let drawing = false;
  let message = null;
  let messageAt = 0;
  let running = true;

  const setMessage = (text) => {
    message = text;
    messageAt = Date.now();
  };

  const finish = () => {
    if (!running) return;
    running = false;
    clearInterval(timer);
    try {
      if (stdin.setRawMode) stdin.setRawMode(false);
    } catch {
      // 忽略
    }
    stdin.pause();
    restoreScreen();
    process.stdout.write('\x1b[2J\x1b[H');
    console.log('  监测窗口已关闭，后台服务继续运行。');
  };

  async function draw() {
    if (drawing || !running || following || busy) return;
    drawing = true;
    try {
      if (message && Date.now() - messageAt > 8000) message = null;
      const rows = await getAllStatus();
      const badges = await getBotBadges();
      const botLines = [];
      for (const service of services) {
        if (!service.discordBot) continue;
        const bot = await getDiscordBotStatus(service);
        const on = bot.state === 'connected';
        const icon = on ? style.green('●') : bot.state === 'down' ? style.gray('○') : style.yellow('●');
        botLines.push(`  ${icon} ${on ? style.green(bot.text) : style.yellow(bot.text)}`);
      }
      renderScreen(buildMonitorLines(rows, badges, botLines, pending, message));
    } finally {
      drawing = false;
    }
  }

  async function runAction(fn) {
    if (busy || !running || following) return;
    busy = true;
    try {
      setMessage(await fn());
    } catch (err) {
      setMessage(`✗ 操作失败: ${err.message}`);
    } finally {
      busy = false;
      await draw();
    }
  }

  const timer = setInterval(draw, 3000);
  await draw();

  stdin.on('keypress', (str, key) => {
    if (!running) return;
    if (key.ctrl && key.name === 'c') return finish();
    if (following) return; // 实时日志视图自己处理按键
    const ch = key.sequence;

    if (ch === 'q') return finish();
    if (busy) return;
    if (ch === 'r') return void draw();
    if (ch === 'a') return void runAction(async () => {
      const notes = [];
      for (const service of services) {
        const status = await getServiceStatus(service);
        if (!status.anyUp) notes.push(await toggleServiceQuiet(service, 1500));
      }
      return notes.join('；') || '全部服务均已在运行';
    });
    if (ch === 'x') return void runAction(async () => {
      const notes = [];
      for (const row of await getAllStatus()) {
        if (row.anyUp || row.tracked) notes.push(await stopService(row));
      }
      return notes.join('；') || '没有正在运行的服务';
    });
    if (ch === 'o' || ch === 'l' || ch === 'f' || ch === 't' || ch === 'n') {
      pending = ch === 'f' ? 'l' : ch;
      void draw();
      return;
    }
    if (/^[1-9]$/.test(ch)) {
      const service = services[Number(ch) - 1];
      if (!service) return;
      const action = pending;
      pending = null;
      if (action === 'o') {
        openUrl(service.url);
        setMessage(`已在浏览器打开 ${service.label}`);
        void draw();
        return;
      }
      if (action === 'l') {
        // 进入实时日志视图：暂停自动刷新，由 followLogView 处理按键
        following = true;
        void (async () => {
          await followLogView(service);
          following = false;
          if (stdin.setRawMode) stdin.setRawMode(true);
          // 日志视图动过屏幕，重置为全屏监测画面
          process.stdout.write('\x1b[2J\x1b[H\x1b[?25l\x1b[?7l');
          screenLinesDrawn = 0;
          await draw();
        })();
        return;
      }
      if (action === 't') {
        return void runAction(() => takeoverService(service));
      }
      if (action === 'n') {
        return void runAction(() => startLanQuiet(service));
      }
      return void runAction(() => toggleServiceQuiet(service));
    }
    if (pending) {
      pending = null;
      void draw();
    }
  });

  // 等待退出
  await new Promise((resolve) => stdin.once('close', resolve));
  if (running) finish();
}

// ---------------- 交互式菜单 ----------------
async function interactive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  // 自己维护输入队列：提示符出现之前到达的行先缓存，stdin 关闭时让挂起的等待返回 null
  const lines = [];
  let waiter = null;
  rl.on('line', (line) => {
    if (waiter) {
      const resolve = waiter;
      waiter = null;
      resolve(line);
    } else {
      lines.push(line);
    }
  });
  rl.on('close', () => {
    if (waiter) {
      const resolve = waiter;
      waiter = null;
      resolve(null);
    }
  });
  const ask = (prompt) => {
    process.stdout.write(prompt);
    if (lines.length) return Promise.resolve(lines.shift());
    if (rl.closed) return Promise.resolve(null);
    return new Promise((resolve) => {
      waiter = resolve;
    });
  };

  console.log('本地项目服务管理器（q 退出，后台服务会继续运行）');
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const rows = await getAllStatus();
    console.clear();
    printStatusTable(rows, await getBotBadges());
    printMenuHelp();
    const input = await ask('  > ');
    if (input === null) break;
    const answer = input.trim().toLowerCase();
    if (['q', 'quit', 'exit'].includes(answer)) break;
    if (answer === '' || answer === 'r') continue;

    if (answer === 'w') {
      spawnMonitorWindow();
      await ask('  回车返回菜单...');
      continue;
    }
    if (answer === 'a') {
      for (const service of services) {
        // 逐个启动并稍作等待，避免同时拉起过多进程
        await startAndWait(service, 1500);
      }
      await ask('\n  回车返回菜单...');
      continue;
    }
    if (answer === 'x') {
      for (const row of await getAllStatus()) {
        if (row.anyUp || row.tracked) console.log(`  ${await stopService(row)}`);
      }
      await ask('\n  回车返回菜单...');
      continue;
    }

    const match = /^([otln]?)(\d+)$/.exec(answer);
    if (!match) {
      console.log('  无法识别的命令');
      await ask('  回车返回菜单...');
      continue;
    }
    const idx = Number(match[2]) - 1;
    const action = match[1];
    const row = rows[idx];
    if (!row) {
      console.log('  没有这个编号');
      await ask('  回车返回菜单...');
      continue;
    }
    const service = row.service;
    if (action === 'o') {
      openUrl(service.url);
      await sleep(500);
      continue;
    }
    if (action === 'n') {
      console.log(`  ${await startLanQuiet(service)}`);
      await ask('  回车返回菜单...');
      continue;
    }
    if (action === 't') {
      console.log('  正在接管（结束外部进程并由管理器重新启动）...');
      console.log(`  ${await takeoverService(service)}`);
      lines.length = 0; // 清掉实时日志期间误入的按键
      await ask('  回车返回菜单...');
      continue;
    }
    if (action === 'l') {
      await followLogView(service);
      lines.length = 0; // 清掉实时日志期间误入的按键
      continue;
    }
    // 纯数字：切换启动/停止
    if (row.anyUp) {
      console.log(`  ${await stopService(row)}`);
      await sleep(800);
    } else {
      await startAndWait(service);
    }
  }
  rl.close();
  console.log('再见！');
}

// ---------------- Web 图形界面 ----------------
const GUI_PORT = Number(process.env.GUI_PORT || 8930);

// 静默启动（GUI/接口用）：返回结果文本，不打印
async function startQuiet(service, mode = 'local') {
  const before = await getServiceStatus(service);
  if (before.anyUp) return `${service.label} 已在运行`;
  startService(service, mode);
  await sleep(service.waitMs ?? 3000);
  const after = await getServiceStatus(service);
  return after.anyUp
    ? `✓ ${service.label} 已启动${mode === 'lan' ? '（局域网）' : ''}`
    : `✗ ${service.label} 启动失败，请查看日志`;
}

function guiPageHtml() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Service Control Center</title>
<style>
:root{
  --bg:#04070f; --panel:rgba(10,22,42,.72); --line:rgba(0,229,255,.22);
  --cyan:#00e5ff; --green:#00ff9d; --red:#ff4d6d; --amber:#ffc857;
  --text:#d6e6f5; --dim:#5f7d9c; --mono:'Cascadia Code',Consolas,monospace;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);
  font-family:'Segoe UI','Microsoft YaHei',sans-serif;min-height:100vh}
body::before{content:'';position:fixed;inset:0;pointer-events:none;
  background:radial-gradient(ellipse at 18% -10%,rgba(0,229,255,.13),transparent 55%),
             radial-gradient(ellipse at 92% 112%,rgba(0,255,157,.07),transparent 50%)}
.bg-grid{position:fixed;inset:0;pointer-events:none;opacity:.5;
  background-image:linear-gradient(rgba(0,229,255,.05) 1px,transparent 1px),
                   linear-gradient(90deg,rgba(0,229,255,.05) 1px,transparent 1px);
  background-size:44px 44px;animation:grid 24s linear infinite}
@keyframes grid{to{background-position:44px 44px,44px 44px}}
.wrap{position:relative;max-width:1280px;margin:0 auto;padding:28px 24px 60px}
header{display:flex;align-items:baseline;gap:22px;flex-wrap:wrap;margin-bottom:26px;
  border-bottom:1px solid var(--line);padding-bottom:16px}
h1{margin:0;font-size:21px;font-weight:600;letter-spacing:5px;color:#fff}
h1 b{color:var(--cyan);text-shadow:0 0 18px rgba(0,229,255,.6);font-weight:600}
h1 small{display:block;font-size:11px;letter-spacing:3px;color:var(--dim);margin-top:4px}
.summary{font-size:13px;color:var(--dim)}
.summary b{color:var(--green);font-size:17px;font-family:var(--mono)}
.clock{margin-left:auto;font-family:var(--mono);font-size:20px;color:var(--cyan);
  text-shadow:0 0 14px rgba(0,229,255,.5)}
#grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px}
.card{border:1px solid var(--line);border-radius:13px;background:var(--panel);
  backdrop-filter:blur(9px);padding:18px 18px 14px;position:relative;overflow:hidden;
  transition:border-color .25s,box-shadow .25s,transform .25s}
.card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--cyan),transparent);opacity:.35}
.card.run::after{background:linear-gradient(90deg,transparent,var(--green),transparent);opacity:.8}
.card:hover{border-color:rgba(0,229,255,.55);box-shadow:0 0 26px rgba(0,229,255,.13);
  transform:translateY(-2px)}
.chead{display:flex;align-items:center;gap:10px}
.led{width:10px;height:10px;border-radius:50%;flex:none;background:var(--dim)}
.card.run .led{background:var(--green);box-shadow:0 0 12px var(--green);animation:pulse 2s infinite}
@keyframes pulse{50%{box-shadow:0 0 22px var(--green)}}
.name{font-size:16px;font-weight:600;color:#fff;letter-spacing:.5px}
.ext{font-size:10px;color:var(--amber);border:1px solid rgba(255,200,87,.4);
  border-radius:4px;padding:1px 6px;margin-left:6px}
.desc{font-size:12px;color:var(--dim);margin:6px 0 10px}
.chips{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.chip{font-family:var(--mono);font-size:12px;border-radius:6px;padding:3px 9px;
  border:1px solid rgba(95,125,156,.35);color:var(--dim)}
.chip.up{border-color:rgba(0,255,157,.45);color:var(--green);text-shadow:0 0 8px rgba(0,255,157,.4)}
.chip.down{border-color:rgba(255,77,109,.45);color:var(--red)}
.chip.lan{border-color:rgba(0,229,255,.5);color:var(--cyan);text-shadow:0 0 8px rgba(0,229,255,.4)}
.badge-up{color:var(--green)} .badge-warn{color:var(--amber)}
.url{font-size:11px;color:var(--dim);font-family:var(--mono);margin-top:8px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.btns{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
button{cursor:pointer;font:inherit;font-size:12px;color:var(--cyan);background:transparent;
  border:1px solid rgba(0,229,255,.45);border-radius:7px;padding:6px 14px;letter-spacing:1px;
  transition:all .2s}
button:hover{background:rgba(0,229,255,.12);box-shadow:0 0 14px rgba(0,229,255,.25)}
button:disabled{opacity:.4;cursor:wait}
button.stop{color:var(--red);border-color:rgba(255,77,109,.5)}
button.stop:hover{background:rgba(255,77,109,.12);box-shadow:0 0 14px rgba(255,77,109,.25)}
button.ghost{color:var(--dim);border-color:rgba(95,125,156,.4)}
#botPanel{margin-top:22px;border:1px solid var(--line);border-radius:13px;
  background:var(--panel);backdrop-filter:blur(9px);padding:16px 20px;
  display:flex;align-items:center;gap:12px}
#botPanel .led{width:12px;height:12px}
#botPanel.on .led{background:var(--green);box-shadow:0 0 14px var(--green);animation:pulse 2s infinite}
#botPanel.off .led{background:var(--amber);box-shadow:0 0 10px var(--amber)}
#botPanel .bt{font-size:14px}
footer{margin-top:26px;display:flex;align-items:center;color:var(--dim);font-size:12px}
footer button{margin-left:auto}
.modal{position:fixed;inset:0;background:rgba(2,6,14,.78);backdrop-filter:blur(4px);
  display:flex;align-items:center;justify-content:center;z-index:50}
.modal.hidden{display:none}
.mbox{width:min(880px,92vw);height:min(70vh,640px);background:#060c18;
  border:1px solid rgba(0,229,255,.35);border-radius:12px;display:flex;flex-direction:column;
  box-shadow:0 0 60px rgba(0,229,255,.18)}
.mhead{display:flex;align-items:center;padding:10px 16px;border-bottom:1px solid var(--line);
  color:var(--cyan);letter-spacing:2px;font-size:13px}
.mhead button{margin-left:auto;padding:3px 12px}
#logBox{flex:1;overflow:auto;padding:14px 18px;font-family:var(--mono);font-size:12.5px;
  line-height:1.65;color:#9fd8c8;white-space:pre-wrap;word-break:break-all}
#toasts{position:fixed;right:22px;bottom:22px;display:flex;flex-direction:column;gap:8px;z-index:99}
.toast{border:1px solid rgba(0,229,255,.4);background:rgba(6,14,28,.92);color:var(--text);
  border-radius:9px;padding:10px 16px;font-size:13px;box-shadow:0 0 20px rgba(0,229,255,.15);
  animation:tin .3s ease}
.toast.ok{border-color:rgba(0,255,157,.5)} .toast.err{border-color:rgba(255,77,109,.5)}
@keyframes tin{from{transform:translateX(30px);opacity:0}}
</style>
</head>
<body>
<div class="bg-grid"></div>
<div class="wrap">
  <header>
    <h1><b>◈ SERVICE CONTROL</b> CENTER<small>本地项目服务控制中心</small></h1>
    <div class="summary" id="summary">连接中…</div>
    <div class="clock" id="clock">--:--:--</div>
  </header>
  <div id="grid"></div>
  <div id="botPanel"><div class="led"></div><div class="bt" id="botText">Discord Bot 检测中…</div></div>
  <footer>
    <span>每 2 秒自动刷新 · 管理器后台运行中</span>
    <button class="ghost" onclick="shutdown()">退出后台服务</button>
  </footer>
</div>
<div class="modal hidden" id="logModal">
  <div class="mbox">
    <div class="mhead"><span id="logTitle">日志</span><button onclick="closeLog()">关闭</button></div>
    <div id="logBox"></div>
  </div>
</div>
<div id="toasts"></div>
<script>
var state=null, logName=null, logTimer=null;
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function clock(){$('clock').textContent=new Date().toLocaleTimeString('zh-CN',{hour12:false})}
setInterval(clock,1000);clock();

function toast(msg){
  var d=document.createElement('div');
  d.className='toast '+(/^✓|已|成功/.test(msg)?'ok':(/^✗|失败/.test(msg)?'err':''));
  d.textContent=msg;$('toasts').appendChild(d);
  setTimeout(function(){d.style.opacity=0;d.style.transition='opacity .4s';
    setTimeout(function(){d.remove()},400)},3800);
}
async function refresh(){
  try{
    var r=await fetch('/api/status');state=await r.json();render();
  }catch(e){$('summary').textContent='⚠ 后台服务未连接（双击 service-monitor.exe 重新启动）'}
}
setInterval(refresh,2000);refresh();

function render(){
  var g=$('grid');g.innerHTML='';
  var run=0;
  state.services.forEach(function(s,i){
    if(s.running)run++;
    var chips=s.ports.map(function(p){
      return '<span class="chip '+(p.up?'up':'down')+'">'+p.port+(p.up?' ✔':' ✘')+'</span>';
    }).join('');
    if(s.badge){
      var cls=s.badge.indexOf('✔')>=0?'badge-up':'badge-warn';
      chips+='<span class="chip '+cls+'">'+esc(s.badge)+'</span>';
    }
    if(s.mode==='lan')chips+='<span class="chip lan">局域网</span>';
    var c=document.createElement('div');
    c.className='card'+(s.running?' run':'');
    c.innerHTML='<div class="chead"><div class="led"></div>'+
      '<div class="name">'+esc(s.label)+'</div>'+
      (s.running&&!s.tracked?'<span class="ext">外部</span>':'')+'</div>'+
      '<div class="desc">'+esc(s.desc)+'</div>'+
      '<div class="chips">'+chips+'</div>'+
      '<div class="url">'+esc((s.mode==='lan'&&s.lanUrl)?s.lanUrl:s.url)+'</div>'+
      '<div class="btns">'+
      '<button data-i="'+i+'" data-t="'+(s.running?'stop':'start')+'"'+(s.running?' class="stop"':'')+'>'+(s.running?'■ 停止':'▶ 启动')+'</button>'+
      (!s.running&&s.lan?'<button data-i="'+i+'" data-t="start-lan">▶ 局域网</button>':'')+
      '<button data-i="'+i+'" data-t="open">网页</button>'+
      '<button data-i="'+i+'" data-t="logs">日志</button>'+
      (s.running&&!s.tracked?'<button data-i="'+i+'" data-t="adopt">接管</button>':'')+
      '</div>';
    g.appendChild(c);
  });
  $('summary').innerHTML='<b>'+run+'</b> / '+state.services.length+' 服务在线';
  var bot=state.bots&&state.bots[0];
  if(bot){
    var p=$('botPanel');
    p.className=bot.state==='connected'?'on':'off';
    $('botText').innerHTML='<b style="letter-spacing:1px">DISCORD BOT</b>　'+esc(bot.text);
  }
}
document.getElementById('grid').addEventListener('click',function(ev){
  var b=ev.target.closest('button');if(!b)return;
  var s=state.services[+b.dataset.i];
  if(b.dataset.t==='logs')return openLog(s);
  act(b.dataset.t,s.name,b);
});
async function act(type,name,btn){
  if(btn)btn.disabled=true;
  try{
    var r=await fetch('/api/action',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({type:type,name:name})});
    var d=await r.json();toast(d.message||d.error||'完成');
  }catch(e){toast('✗ 请求失败: '+e.message)}
  refresh();
}
function openLog(s){
  logName=s.name;$('logTitle').textContent=s.label+' 实时日志';
  $('logBox').textContent='';$('logModal').classList.remove('hidden');
  clearInterval(logTimer);loadLog();logTimer=setInterval(loadLog,1500);
}
async function loadLog(){
  if(!logName)return;
  try{
    var r=await fetch('/api/logs?name='+logName);var d=await r.json();
    var box=$('logBox'),stick=box.scrollTop+box.clientHeight>=box.scrollHeight-30;
    box.textContent=d.lines.join('\\n');
    if(stick)box.scrollTop=box.scrollHeight;
  }catch(e){}
}
function closeLog(){logName=null;clearInterval(logTimer);$('logModal').classList.add('hidden')}
async function shutdown(){
  if(!confirm('确定退出管理器后台服务吗？（正在运行的项目服务不受影响）'))return;
  await fetch('/api/shutdown',{method:'POST'});
  toast('后台服务已退出，页面即将失效');
}
</script>
</body>
</html>`;
}

function parseJsonBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 1e6) req.destroy();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'));
      } catch {
        resolve({});
      }
    });
  });
}

async function guiServe(port) {
  const http = require('node:http');
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const send = (code, body, type = 'application/json; charset=utf-8') => {
      res.writeHead(code, { 'Content-Type': type });
      res.end(typeof body === 'string' ? body : JSON.stringify(body));
    };
    try {
      if (req.method === 'GET' && url.pathname === '/') {
        return send(200, guiPageHtml(), 'text/html; charset=utf-8');
      }
      if (req.method === 'GET' && url.pathname === '/api/status') {
        const rows = await getAllStatus();
        const badges = await getBotBadges();
        const bots = [];
        for (const s of services) {
          if (!s.discordBot) continue;
          const bot = await getDiscordBotStatus(s);
          bots.push({ label: s.label, text: bot.text, state: bot.state });
        }
        return send(200, {
          time: new Date().toISOString(),
          services: rows.map((r) => ({
            name: r.service.name,
            label: r.service.label,
            desc: r.service.desc,
            url: r.service.url,
            running: r.anyUp,
            tracked: r.tracked,
            mode: r.mode,
            lan: Boolean(r.service.lanCommand),
            lanUrl: r.service.lanUrl ? r.service.lanUrl.replace('{ip}', getLanIp()) : null,
            ports: r.portChecks,
            badge: badges[r.service.name] || null,
          })),
          bots,
        });
      }
      if (req.method === 'GET' && url.pathname === '/api/logs') {
        const name = url.searchParams.get('name') || '';
        const service = services.find((s) => s.name === name);
        if (!service) return send(404, { error: 'not found' });
        return send(200, { lines: tailLog(name, 300) });
      }
      if (req.method === 'POST' && url.pathname === '/api/action') {
        const body = await parseJsonBody(req);
        const service = services.find((s) => s.name === body.name);
        if (!service) return send(404, { error: 'not found' });
        let message = '';
        if (body.type === 'start') message = await startQuiet(service);
        else if (body.type === 'start-lan') message = await startLanQuiet(service);
        else if (body.type === 'stop') message = await stopService(await getServiceStatus(service));
        else if (body.type === 'restart') {
          message = await stopService(await getServiceStatus(service));
          await sleep(1200);
          message += `；${await startQuiet(service)}`;
        } else if (body.type === 'adopt') message = await takeoverService(service);
        else if (body.type === 'open') {
          const status = await getServiceStatus(service);
          openUrl(displayUrl(service, status.mode));
          message = `已在浏览器打开 ${service.label}`;
        } else return send(400, { error: 'bad type' });
        return send(200, { ok: true, message });
      }
      if (req.method === 'POST' && url.pathname === '/api/shutdown') {
        send(200, { ok: true });
        setTimeout(() => process.exit(0), 300);
        return;
      }
      return send(404, { error: 'not found' });
    } catch (err) {
      return send(500, { error: err.message });
    }
  });
  await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
  return server;
}

// 打开图形界面：后台已有服务则直接开页面；没有则拉起隐藏后台进程再开页面。
// 拉起方式与普通服务一致（cmd 批处理包装）——实测这种方式的进程在宿主退出后仍稳定存活。
async function guiMode() {
  const base = `http://127.0.0.1:${GUI_PORT}`;
  if (await probePort(GUI_PORT)) {
    openUrl(`${base}/`);
    console.log(`  管理界面已在运行: ${base}`);
    return;
  }
  console.log('  正在启动管理界面后台服务...');
  const guiService = {
    name: 'gui-server',
    label: 'GUI',
    desc: '',
    dir: '.',
    command: IS_SEA ? `"${process.execPath}" serve` : `node "${__filename}" serve`,
  };
  const { scriptPath } = writeRunScript(guiService);
  const child = spawn(process.env.ComSpec || 'cmd.exe', ['/d', '/c', scriptPath], {
    cwd: ROOT,
    windowsHide: true,
    stdio: 'ignore',
  });
  child.unref();
  for (let i = 0; i < 40; i++) {
    await sleep(250);
    if (await probePort(GUI_PORT)) break;
  }
  if (await probePort(GUI_PORT)) {
    openUrl(`${base}/`);
    console.log(`  管理界面已打开: ${base} （此后可以关闭本窗口）`);
  } else {
    console.log('  ✗ 界面后台服务启动失败，日志见 .service-manager/logs/gui-server.log');
    process.exitCode = 1;
  }
}

// ---------------- 命令行子命令 ----------------
function findService(key) {
  const lowered = String(key).toLowerCase();
  return services.find(
    (service) =>
      service.name === lowered ||
      service.label.toLowerCase() === lowered ||
      service.dir.toLowerCase() === lowered,
  );
}

async function cliStart(target) {
  const list = target === 'all' ? services : [findService(target)];
  if (!list[0]) return usage(`找不到服务 "${target}"`);
  for (const service of list) await startAndWait(service);
}

async function cliStop(target) {
  const list = target === 'all' ? services : [findService(target)];
  if (!list[0]) return usage(`找不到服务 "${target}"`);
  for (const service of list) {
    const row = await getServiceStatus(service);
    if (row.anyUp || row.tracked) console.log(`  ${await stopService(row)}`);
    else console.log(`  ${service.label} 本来就没有在运行`);
  }
}

function usage(error) {
  if (error) console.log(`错误: ${error}\n`);
  console.log(`用法: service-monitor.exe [命令] [名称|all]
  （双击 exe 或不带参数运行 = 打开图形界面控制中心）

  status                查看所有服务状态
  start <名称|all>      启动服务（仅本机）
  start-lan <名称|all>  局域网模式启动（ClientCore / Grade128）
  stop <名称|all>       停止服务
  restart <名称|all>    重启服务
  adopt <名称|all>      接管外部进程（结束旧终端窗口里的进程，转为管理器后台运行）
  open <名称>           在浏览器打开服务页面
  logs <名称> [-f]      查看最近日志（-f 实时跟踪）
  gui                   打开图形界面控制中心（默认）
  serve                 图形界面的后台服务（内部使用）
  menu                  终端交互菜单
  monitor               终端监测窗口
  bot                   只查看 Receipt Organizer Discord bot 状态

可用服务: ${services.map((s) => s.name).join(', ')}`);
}

async function main() {
  // SEA(exe) 模式下 argv[1] 是 exe 自身路径，参数同样从下标 2 开始
  const [, , cmd, target] = process.argv;
  if (!cmd) return guiMode();

  switch (cmd) {
    case 'status': {
      const rows = await getAllStatus();
      printStatusTable(rows, await getBotBadges());
      break;
    }
    case 'start':
      await cliStart(target);
      break;
    case 'start-lan': {
      if (target === 'all') {
        for (const service of services) {
          if (service.lanCommand) await startAndWait(service, undefined, 'lan');
        }
        break;
      }
      const service = findService(target);
      if (!service) return usage(`找不到服务 "${target}"`);
      await startAndWait(service, undefined, 'lan');
      break;
    }
    case 'stop':
      await cliStop(target);
      break;
    case 'restart': {
      if (target !== 'all' && !findService(target)) return usage(`找不到服务 "${target}"`);
      await cliStop(target);
      await sleep(1000);
      await cliStart(target);
      break;
    }
    case 'open': {
      const service = findService(target);
      if (!service) return usage(`找不到服务 "${target}"`);
      const status = await getServiceStatus(service);
      openUrl(displayUrl(service, status.mode));
      console.log(`  已在浏览器打开 ${displayUrl(service, status.mode)}`);
      break;
    }
    case 'logs': {
      const followFlag = process.argv.slice(4).some((arg) => arg === '-f' || arg === '--follow');
      const service = findService(target);
      if (!service) return usage(`找不到服务 "${target}"`);
      if (followFlag) {
        await followLogView(service);
      } else {
        console.log(`  ${service.label} 最近日志（.service-manager/logs/${service.name}.log）：`);
        for (const line of tailLog(service.name, 40)) console.log(`  | ${line}`);
      }
      break;
    }
    case 'adopt': {
      if (target === 'all') {
        for (const service of services) {
          const status = await getServiceStatus(service);
          if (status.anyUp && !status.tracked) {
            console.log(`  ${await takeoverService(service)}`);
          }
        }
        break;
      }
      const service = findService(target);
      if (!service) return usage(`找不到服务 "${target}"`);
      console.log(`  ${await takeoverService(service)}`);
      break;
    }
    case 'monitor':
      await monitorMode();
      break;
    case 'menu':
      await interactive();
      break;
    case 'gui':
      await guiMode();
      break;
    case 'serve':
      await guiServe(GUI_PORT);
      break; // 常驻，不会走到这里
    case 'bot': {
      const service = services.find((s) => s.discordBot);
      if (!service) return console.log('  配置里没有启用 discordBot 的服务');
      const bot = await getDiscordBotStatus(service);
      console.log(`  Discord Bot: ${bot.text}`);
      break;
    }
    case 'window':
      spawnMonitorWindow();
      break;
    default:
      usage(`未知命令 "${cmd}"`);
  }
}

// 直接运行本文件或打包成 exe 时才执行 main（被 import 测试时不执行）
async function bootstrap() {
  try {
    await main();
  } catch (err) {
    console.error(err);
    // exe 双击运行时出错，留住窗口让用户看到错误
    if (IS_SEA && process.stdin.isTTY) {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      await new Promise((resolve) => rl.question('\n按回车键退出...', () => resolve()));
      rl.close();
    }
    process.exitCode = 1;
  }
}

if (IS_SEA || require.main === module) {
  bootstrap();
}

module.exports = { parseNetstatLines, findPortOwnerPid, hasRemoteTlsConnection, services };
