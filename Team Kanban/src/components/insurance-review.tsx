'use client';
import WorkspaceNavigation, { type NavigationData } from './workspace-navigation';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowDown, Check, CheckCheck, ChevronRight, CarFront, House, Phone, ShieldCheck, SlidersHorizontal, Download, Pencil, Save, X, FileCheck2 } from 'lucide-react';
import { propertyTypes, propertyQuotes, withProperties, type PropertyQuote, initialReview, isReview, STORAGE_KEY, total, withOptionalAB, planPayments, withVehicles, vehicleQuotes, type VehicleQuote, type Review } from '../lib/insurance-review';


import { PROFILES_KEY, readProfiles, blankProfile, type SavedProfile as Saved } from '../lib/insurance-profiles';
export default function InsuranceReview() {
  const [navigationData, setNavigationData] = useState<NavigationData | null>(null);
  useEffect(() => { void fetch('/api/state', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).then(setNavigationData).catch(() => {}); }, []);
  async function logout() { const response = await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ op: 'logout' }) }); if (response.ok || response.status === 401) location.href = '/'; }

  const [data, setData] = useState<Review>(() => withProperties(blankProfile()));
  const titles = data.carriers.map((_, i) => i === 0 ? '现有保险' : `方案${i === 1 ? '一' : i === 2 ? '二' : i}`);
  const [saved, setSaved] = useState<Saved | null>(null);
  const [profiles, setProfiles] = useState<Saved[]>([]);
  const [profileId, setProfileId] = useState('legacy-profile');
  const [profileSearch, setProfileSearch] = useState('');
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [localProfiles, setLocalProfiles] = useState<Saved[]>([]);
  const begin = () => { busyRef.current = true; setBusy(true); };
  const finish = () => { busyRef.current = false; setBusy(false); };
  const [dirty, setDirty] = useState(false);
  const [editing, setEditing] = useState(false);
  const [onlyDiff, setOnlyDiff] = useState(false);
  const [tab, setTab] = useState('all');
  const [period, setPeriod] = useState('year');
  const [message, setMessage] = useState('');
  async function cloud(body?: unknown) {
    const response = await fetch('/api/insurance-profiles', { method: body ? 'POST' : 'GET', cache: 'no-store', headers: body ? { 'Content-Type': 'application/json' } : undefined, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(20000) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || '云端请求失败');
    return result;
  }
  async function refreshCloud(preferredId?: string) {
    const result = await cloud();
    const records: Saved[] = result.profiles;
    setProfiles(records); setReady(true);
    const target = records.find(p => p.id === preferredId) ?? records[0];
    if (target) loadProfile(target);
    else { setData(withProperties(blankProfile())); setSaved(null); setProfileId(crypto.randomUUID()); setDirty(false); }
  }
  useEffect(() => {
    try {
      const store = readProfiles(localStorage.getItem(PROFILES_KEY));
      if (store) setLocalProfiles(store.profiles);
      else {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const record = JSON.parse(raw);
          if (!isReview(record.review) || !['draft', 'confirmed'].includes(record.status) || typeof record.savedAt !== 'string') throw Error();
          setLocalProfiles([{ ...record, id: 'legacy-profile' }]);
        }
      }
    } catch { setMessage('本地旧记录无法读取，原记录未改动。'); }
    begin();
    void refreshCloud().catch(e => setMessage(`云端加载失败：${e.message}。请登录后重试。`)).finally(finish);
  }, []);
  useEffect(() => {
    const guard = (event: BeforeUnloadEvent) => { if (dirty) event.preventDefault(); };
    window.addEventListener('beforeunload', guard); return () => window.removeEventListener('beforeunload', guard);
  }, [dirty]);
  function update(patch: Partial<Review>) { setData(previous => withProperties(withVehicles({ ...previous, ...patch, checks: patch.checks ?? [false, false, false] }))); setDirty(true); setMessage(''); }
  const vehicles = vehicleQuotes(data);
  const properties = propertyQuotes(data);
  function changeProperty(id: string, patch: Partial<PropertyQuote>) { update({ properties: properties.map(p => p.id === id ? { ...p, ...patch } : p) }); }
  function addProperty() { update({ properties: [...properties, { id: crypto.randomUUID(), name: '', type: '', premiums: data.carriers.map(() => ''), rows: data.homeRows.map(r => ({ ...r, values: data.carriers.map(() => '待确认') })) }] }); setEditing(true); }

  function changeVehicle(id: string, patch: Partial<VehicleQuote>) { update({ vehicles: vehicles.map(v => v.id === id ? { ...v, ...patch } : v) }); }
  function addVehicle() { update({ vehicles: [...vehicles, { id: crypto.randomUUID(), name: '', premiums: data.carriers.map(() => '') }] }); setEditing(true); }
  const money = (amount: number | null) => amount === null ? '待确认' : new Intl.NumberFormat('en-CA', { style: 'currency', currency: data.currency, maximumFractionDigits: 2 }).format(amount);
  const totals = data.carriers.map((_, i) => i).map(i => total(data, i));
  const payments = data.carriers.map((_, i) => planPayments(data, i));
  const displayTotals = period === 'month' ? payments.map(p => p.monthly) : totals;
  const selectedTotal = data.selected === null ? null : totals[data.selected];
  const saving = selectedTotal !== null && totals[0] !== null ? Math.round((totals[0] - selectedTotal) * 100) / 100 : null;
  const selectedComplete = data.selected !== null && !!data.carriers[data.selected].trim() && [...data.autoRows, ...properties.flatMap(p => p.rows)].every(row => !!row.values[data.selected!].trim() && row.values[data.selected!] !== '待确认');
  const canConfirm = selectedComplete && data.selected !== null && selectedTotal !== null && !!data.name.trim() && vehicles.every(v => !!v.name.trim()) && properties.every(p => !!p.name.trim() && !!p.type) && !!data.effective && data.checks.every(Boolean);
  function loadProfile(record: Saved) {
    const migrated = withProperties(withVehicles(withOptionalAB(record.review)));
    const changed = migrated.autoRows.length !== record.review.autoRows.length || record.calculationVersion !== 4;
    setData(changed ? { ...migrated, checks: [false, false, false] } : migrated);
    setSaved(record); setProfileId(record.id); setDirty(changed); setEditing(false); setOnlyDiff(false); setTab('all'); setPeriod(record.paymentView === 'month' ? 'month' : 'year');
    setMessage(changed ? '旧记录已补齐新字段，请核对后保存。' : '');
  }
  async function writeProfile(record: Saved): Promise<Saved> {
    const result = await cloud({ profile: { ...record, version: record.version ?? 0 } });
    const stored: Saved = result.profile;
    setProfiles(previous => [stored, ...previous.filter(p => p.id !== stored.id)]);
    setSaved(stored); setDirty(false);
    return stored;
  }
  async function persist(status: Saved['status']): Promise<boolean> {
    if (!ready || busyRef.current || (status === 'confirmed' && !canConfirm)) return false;
    begin();
    const record: Saved = { id: profileId, version: saved?.version ?? 0, review: structuredClone(data), status, savedAt: new Date().toISOString(), calculationVersion: 4, paymentView: period, payments };
    try { await writeProfile(record); setMessage(status === 'confirmed' ? '确认结果已保存到 Supabase。' : '草稿已保存到 Supabase。'); return true; }
    catch (e) { setMessage(`保存失败：${e instanceof Error ? e.message : '请稍后重试'}。当前修改仍在页面，可导出备份。`); return false; }
    finally { finish(); }
  }
  async function switchProfile(id: string) {
    if (id === profileId || busyRef.current) return;
    if (dirty && !await persist('draft')) return;
    begin();
    try { await refreshCloud(id); }
    catch (e) { setMessage(`切换失败：${e instanceof Error ? e.message : '请重试'}`); }
    finally { finish(); }
  }
  async function newProfile() {
    if (!ready || busyRef.current) return;
    if (dirty && !await persist('draft')) return;
    setData(withProperties(blankProfile())); setSaved(null); setProfileId(crypto.randomUUID()); setDirty(false);
    setEditing(true); setProfileSearch(''); setMessage('新 Profile 尚未保存，请填写后保存到云端。');
  }
  async function importLocal() {
    if (!ready || busyRef.current) return;
    if (dirty && !await persist('draft')) return;
    begin();
    try {
      const result = await cloud({ op: 'import', profiles: localProfiles.map(p => ({ ...p, version: 0 })) });
      await refreshCloud();
      setLocalProfiles([]);
      setMessage(`已导入 ${result.imported} 条记录，跳过 ${result.skipped} 条已导入记录。本地原件保留。`);
    } catch (e) { setMessage(`导入失败：${e instanceof Error ? e.message : '请重试'}。本地原件保留。`); }
    finally { finish(); }
  }
  async function reload() {
    if (busyRef.current) return;
    if (dirty) { setMessage('当前有未保存修改，请先保存或导出。'); return; }
    begin();
    try { await refreshCloud(profileId); }
    catch (e) { setMessage(`刷新失败：${e instanceof Error ? e.message : '请重试'}`); }
    finally { finish(); }
  }
  function download() {
    const record = !dirty && saved ? saved : { id: profileId, review: data, status: 'draft', savedAt: new Date().toISOString(), calculationVersion: 4, paymentView: period, payments };
    const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `insurance-review-${new Date().toISOString().slice(0,10)}.json`; link.click(); URL.revokeObjectURL(url);
  }
  function prices(key: 'auto' | 'home', i: number, value: string) { const next = [...data[key]] as Review[typeof key]; next[i] = value; update({ [key]: next }); }
  function addPlan() { update({ properties: properties.map(p => ({ ...p, premiums: [...p.premiums, ''], rows: p.rows.map(r => ({ ...r, values: [...r.values, ''] })) })), carriers: [...data.carriers, '新保险公司'], vehicles: vehicles.map(v => ({ ...v, premiums: [...v.premiums, ''] })), auto: [...data.auto, ''], home: [...data.home, ''], autoRows: data.autoRows.map(r => ({ ...r, values: [...r.values, ''] })), homeRows: data.homeRows.map(r => ({ ...r, values: [...r.values, ''] })) }); setEditing(true); }
  const confirmed = !dirty && saved?.status === 'confirmed';
  return <div className="ir">
    <WorkspaceNavigation page="insurance" data={navigationData} onLogout={() => void logout()}/><WorkspaceNavigation mobile page="insurance" data={navigationData} onLogout={() => void logout()}/>
    <header className="ir-header"><a href="/" className="ir-brand"><ShieldCheck size={25}/><span>Team Kanban</span></a><div className="ir-breadcrumb">客户沟通 <ChevronRight size={13}/><strong>保险方案对比</strong></div><span className="ir-local"><i/>{busy ? '正在同步…' : ready ? 'Supabase 云端保存' : '云端未连接'}</span></header>
    <main className="ir-main" aria-busy={busy}><fieldset className="ir-cloud-fields" disabled={busy}>
      <div className="ir-title"><div><h1>保险方案对比</h1></div></div>
      <section className="ir-profiles" aria-label="已保存的 Profiles">
        <div className="ir-profiles-toolbar"><h2>客户 Profiles <small>{profiles.length}</small></h2><input aria-label="搜索 Profile" placeholder="搜索客户 / 电话" value={profileSearch} onChange={e => setProfileSearch(e.target.value)}/><button className="ir-btn" disabled={!ready} onClick={newProfile}>＋ 新建 Profile</button><button className="ir-btn" disabled={!ready} onClick={() => persist('draft')}><Save size={14}/>保存当前</button></div>
        <div className="ir-cloud-actions"><button className="ir-btn" onClick={() => void reload()}>刷新云端记录</button>{localProfiles.length > 0 && <button className="ir-btn" disabled={!ready} onClick={() => void importLocal()}>将本机 {localProfiles.length} 条旧记录导入当前团队</button>}</div><div className="ir-profile-list">{profiles.filter(p => `${p.review.name} ${p.review.phone}`.toLowerCase().includes(profileSearch.toLowerCase())).map(p => <button key={p.id} className={p.id === profileId ? 'ir-profile active' : 'ir-profile'} aria-pressed={p.id === profileId} onClick={() => switchProfile(p.id)}><strong>{p.id === profileId ? data.name || '未命名客户' : p.review.name || '未命名客户'}</strong><span>{p.review.phone || '未填写电话'} · {vehicleQuotes(p.review).length} 辆车 · {p.review.carriers.length - 1} 个方案</span><small>{p.id === profileId && dirty ? '未保存修改' : p.status === 'confirmed' ? '已确认' : '草稿'} · {new Date(p.savedAt).toLocaleString('zh-CN')}</small></button>)}{!profiles.length && <p>保存后显示在此列表。</p>}{profiles.length > 0 && !profiles.some(p => `${p.review.name} ${p.review.phone}`.toLowerCase().includes(profileSearch.toLowerCase())) && <p>没有匹配的 Profile。</p>}</div>
        <p className="ir-profile-hint">记录保存在 Supabase，当前团队成员登录后可查看与编辑。切换或新建前自动保存修改；刷新云端可读取其他成员的最新记录。</p>
      </section>
      <section className="ir-client"><div className="ir-avatar">{data.name.slice(0,1) || '客'}</div><div><h2>{data.name || '未填写客户'} <span className="ir-badge">NEW LEAD</span></h2><p><Phone size={12}/>{data.phone || '未填写电话'}</p></div><div className="ir-client-risk"><span><CarFront size={15}/>{vehicles.length} 辆车</span><span><House size={15}/>{properties.length} 处房屋</span></div><div className="ir-client-date"><small>拟生效日期</small><strong>{data.effective || '待确认'}</strong></div><span className={`ir-status ${confirmed ? 'done' : ''}`}>{confirmed ? '已确认并保存' : dirty ? '有未保存修改' : '待沟通确认'}</span><button className="ir-btn" onClick={() => setEditing(!editing)}>{editing ? <Check size={15}/> : <Pencil size={15}/>} {editing ? '完成编辑' : '编辑报价资料'}</button></section>
      {editing && <section className="ir-editor" aria-label="编辑报价资料"><h2>客户与报价资料</h2><p>填写未含税费的原始年保费；币种与保障期间需一致。留空表示待确认。</p><div className="ir-fields">{(['name','phone','effective'] as const).map((key,i) => <label key={key}>{['客户姓名','联系电话','拟生效日期'][i]}<input type={key === 'effective' ? 'date' : 'text'} value={data[key]} onChange={e => update({ [key]: e.target.value })}/></label>)}<label>统一币种<select value={data.currency} onChange={e => update({ currency: e.target.value })}><option>CAD</option><option>USD</option></select></label></div><p>下方表格中的承保公司、保费与保项均可直接编辑。</p></section>}
      <div className="ir-workspace"><div className="ir-comparison">
        <div className="ir-section-head"><div><span className="ir-step">01</span><h2>价格与保障对比</h2><span className="ir-demo">团队共享比价记录</span><button className="ir-add" onClick={addPlan}>＋ 添加方案</button></div><div className="ir-segment">{[['year','年保费'],['month','月付金额']].map(([key,label]) => <button key={key} aria-pressed={period === key} className={period === key ? 'active' : ''} onClick={() => setPeriod(key)}>{label}</button>)}</div></div>
        <p className="ir-scroll-hint">车险：年保费 × 1.013 ÷ 12 · 房险：年保费 × 1.11 ÷ 12（3% 分期费 + 8% 税均按原始保费）</p><div className="ir-table-scroll"><div className="ir-matrix" style={{ width: `${220 + titles.length * 205}px`, minWidth: '100%', ['--plans' as string]: titles.length }}>
          <div className="ir-price-grid"><div className="ir-price-label"><h3>车房总保费</h3><small>{data.currency} · {period === 'year' ? '原始年保费（未含税费）' : '含分期费及税 · 12 期'}<br/>按 12 期估算，尾期可能有分币调整</small></div>{titles.map((title,i) => <article key={title} className={`ir-price ${i === data.selected ? 'selected' : ''} ${i === 0 ? 'baseline' : ''}`}><div className="ir-plan-title"><h3>{title}</h3>{i === 0 ? <span>对比基准</span> : <span>{String(i).padStart(2, '0')}</span>}</div>{editing ? <input aria-label={`${title}承保公司`} value={data.carriers[i]} onChange={e => { const carriers = [...data.carriers] as Review['carriers']; carriers[i] = e.target.value; update({ carriers }); }}/> : <p>{data.carriers[i]}</p>}<strong className="ir-amount">{money(displayTotals[i])}</strong><small>/{period === 'year' ? '年' : '月'}</small><div className="ir-saving">{i === 0 ? '当前车房保费合计' : totals[i] === null || totals[0] === null ? '价格待确认' : <><ArrowDown size={12}/>{displayTotals[0]! >= displayTotals[i]! ? (period === 'month' ? '每月少付' : '年保费少付') : (period === 'month' ? '每月多付' : '年保费多付')} {money(Math.abs(displayTotals[0]! - displayTotals[i]!))}</>}</div>{i > 0 && <button className="ir-select" aria-pressed={data.selected === i} onClick={() => update({ selected: i })}>{data.selected === i ? <><Check size={14}/> 已选此方案</> : <>选择此方案 <ChevronRight size={14}/></>}</button>}</article>)}</div>
          <div className="ir-filter"><div>{[['all','全部保障'],['auto','车险'],['home','房屋险']].map(([key,label]) => <button key={key} className={tab === key ? 'active' : ''} onClick={() => setTab(key)}>{label}</button>)}</div><label><input type="checkbox" checked={onlyDiff} onChange={e => setOnlyDiff(e.target.checked)}/><SlidersHorizontal size={13}/>仅看差异</label></div>
          {(['auto','home'] as const).filter(key => tab === 'all' || tab === key).map(key => <section key={key} className="ir-coverage"><div className="ir-coverage-title">{key === 'auto' ? <CarFront size={18}/> : <House size={18}/>}<h3>{key === 'auto' ? '汽车保险' : '房屋保险'}</h3><span>{key === 'auto' ? `${vehicles.length} 辆车 · 保费按车辆汇总` : `${properties.length} 处房屋 · 保费按房屋汇总`}</span><button className="ir-add ir-add-vehicle" onClick={key === 'auto' ? addVehicle : addProperty}>＋ 添加{key === 'auto' ? '车辆' : '房屋'}</button></div><table><colgroup><col/>{titles.map(t => <col key={t}/>)}</colgroup><thead className="ir-sr"><tr><th>保项</th>{titles.map(t => <th key={t}>{t}</th>)}</tr></thead><tbody>{key === 'auto' && vehicles.map((vehicle, carIndex) => <tr key={vehicle.id} className="ir-vehicle-row"><th scope="row"><span className="ir-vehicle-label">车辆 {carIndex + 1}</span>{editing ? <><input aria-label={`车辆${carIndex + 1}信息`} placeholder="年份 / 品牌 / 型号 / 车牌" value={vehicle.name} onChange={e => changeVehicle(vehicle.id, { name: e.target.value })}/><button className="ir-remove-vehicle" disabled={vehicles.length === 1} onClick={() => update({ vehicles: vehicles.filter(v => v.id !== vehicle.id) })}>移除车辆 {carIndex + 1}</button></> : <span className="ir-vehicle-name">{vehicle.name || '待填写车辆信息'}</span>}<small>原始年保费 · 未含税费</small></th>{titles.map((title, i) => <td key={title} className={data.selected === i ? 'chosen' : ''}>{editing ? <input type="number" min="0" step="0.01" aria-label={`${title}车辆${carIndex + 1}年保费`} value={vehicle.premiums[i]} onChange={e => { const premiums = [...vehicle.premiums]; premiums[i] = e.target.value; changeVehicle(vehicle.id, { premiums }); }}/> : money(/^\d+(\.\d{1,2})?$/.test(vehicle.premiums[i].trim()) ? Number(vehicle.premiums[i]) : null)}</td>)}</tr>)}{key === 'home' && properties.map((property, houseIndex) => <Fragment key={property.id}><tr className="ir-vehicle-row"><th scope="row"><span className="ir-vehicle-label">房屋 {houseIndex + 1}</span>{editing ? <><input aria-label={`房屋${houseIndex + 1}信息`} placeholder="地址 / 房屋名称" value={property.name} onChange={e => changeProperty(property.id, { name: e.target.value })}/><select aria-label={`房屋${houseIndex + 1}类型`} value={property.type} onChange={e => changeProperty(property.id, { type: e.target.value as PropertyQuote['type'] })}><option value="">请选择房屋类型</option>{propertyTypes.map(type => <option key={type}>{type}</option>)}</select><button className="ir-remove-vehicle" disabled={properties.length === 1} onClick={() => update({ properties: properties.filter(p => p.id !== property.id) })}>移除房屋 {houseIndex + 1}</button></> : <span className="ir-vehicle-name">{property.name || '待填写房屋信息'} · {property.type || '类型待确认'}</span>}<small>原始年保费 · 未含税费</small></th>{titles.map((title, i) => <td key={title} className={data.selected === i ? 'chosen' : ''}>{editing ? <input type="number" min="0" step="0.01" aria-label={`${title}房屋${houseIndex + 1}年保费`} value={property.premiums[i]} onChange={e => { const premiums = [...property.premiums]; premiums[i] = e.target.value; changeProperty(property.id, { premiums }); }}/> : money(/^\d+(\.\d{1,2})?$/.test(property.premiums[i].trim()) ? Number(property.premiums[i]) : null)}</td>)}</tr>{property.rows.map((row, r) => (!onlyDiff || new Set(row.values).size > 1) && <tr key={r}><th scope="row">{row.label}<small>房屋 {houseIndex + 1} · {row.en}</small></th>{row.values.map((value, i) => <td key={i} className={`${data.selected === i ? 'chosen' : ''} ${!value || value === '待确认' ? 'unknown' : ''}`}>{editing ? <input aria-label={`${titles[i]}房屋${houseIndex + 1}${row.label}`} value={value} onChange={e => { const rows = structuredClone(property.rows); rows[r].values[i] = e.target.value; changeProperty(property.id, { rows }); }}/> : <span className={i > 0 && value !== row.values[0] ? 'ir-different' : ''}>{value || '待确认'}</span>}</td>)}</tr>)}</Fragment>)}<tr className="ir-premium"><th scope="row">{key === 'auto' ? '车险合计' : '房屋险合计'}年保费<small>Base premium · 未含税费</small></th>{titles.map((title,i) => <td key={title} className={data.selected === i ? 'chosen' : ''}>{money(data[key][i].trim() && Number.isFinite(Number(data[key][i])) && Number(data[key][i]) >= 0 ? Number(data[key][i]) : null)}</td>)}</tr>{period === 'month' && ([['fee', key === 'auto' ? '分期费 · 1.3%' : '分期费 · 3%'], ['tax', key === 'auto' ? '税 · 0%' : '税 · 8%'], ['annual', '分期全年总额'], ['monthly', '每月支付 · 12 期']] as const).map(([field, label]) => <tr className={field === 'monthly' ? 'ir-payment-total' : 'ir-payment-row'} key={field}><th scope="row">{label}</th>{titles.map((title, i) => <td key={title} className={data.selected === i ? 'chosen' : ''}>{money(payments[i][key]?.[field] ?? null)}</td>)}</tr>)}{key === 'auto' && <tr className="ir-ab-note"><td colSpan={titles.length + 1}>下列保项为方案级记录；车辆间差异请注明车辆编号。Optional AB / OPCF 47R：逐项填写「包含 + 限额」或「不包含」，未知保留待确认。<a href="https://www.fsrao.ca/sites/default/files/2025-06/AF-162E_OPCF-47R.pdf" target="_blank" rel="noreferrer">官方批单 ↗</a></td></tr>}{(key === 'auto' ? data.autoRows : []).map((row,r) => (!onlyDiff || new Set(row.values).size > 1) && <tr key={r} className={row.en === 'OPCF 47R' ? 'ir-ab-start' : ''}><th scope="row">{row.label}<small>{row.en}</small></th>{row.values.map((value,i) => <td key={i} className={`${data.selected === i ? 'chosen' : ''} ${value === '待确认' || !value ? 'unknown' : ''}`}>{editing ? <input aria-label={`${titles[i]}${row.label}`} value={value} onChange={e => { const rows = structuredClone(data[`${key}Rows`]); rows[r].values[i] = e.target.value; update({ [`${key}Rows`]: rows }); }}/> : <span className={i > 0 && value !== row.values[0] ? 'ir-different' : ''}>{value === '包含' && <Check size={13}/>} {value || '待确认'}</span>}</td>)}</tr>)}</tbody></table></section>)}
        </div></div><p className="ir-footnote"><span/> 绿色底纹标记与现有保险不同的内容，不代表保障一定更优。自付额是客户出险时自行承担的金额。</p>
      </div><aside className="ir-confirm"><div className="ir-confirm-heading"><span className="ir-step">02</span><h2>通话确认</h2><Phone size={16}/></div><div className="ir-selection-summary"><small>客户意向方案</small><h3>{data.selected === null ? '等待客户选择' : titles[data.selected]}{data.selected !== null && <ShieldCheck size={20}/>}</h3><p>{data.selected === null ? '点击左侧方案，开始确认' : data.carriers[data.selected]}</p><div><span>原始车房年保费</span><strong>{money(selectedTotal)}</strong></div>{data.selected !== null && <div className="ir-summary-monthly"><span>含税费月付</span><strong>{money(payments[data.selected].monthly)}</strong></div>}{saving !== null && <div className="ir-summary-saving"><span>{saving >= 0 ? '原始年保费减少' : '原始年保费增加'}</span><b>{money(Math.abs(saving))}</b></div>}</div><div className="ir-checklist"><h3>与客户逐项确认</h3>{['已说明价格、币种与付款安排','已说明保额、自付额及保障差异','客户同意所选方案及拟生效日期'].map((label,i) => <label key={label}><input type="checkbox" checked={data.checks[i]} onChange={e => { const checks = [...data.checks]; checks[i] = e.target.checked; update({ checks }); }}/><span>{label}</span></label>)}</div><label className="ir-notes">沟通记录 <span>选填</span><textarea placeholder="记录客户关注点、付款安排，或仍需跟进的问题…" rows={5} value={data.note} onChange={e => update({ note: e.target.value })}/></label><div className="ir-confirm-date"><span>确认方式</span><strong><Phone size={12}/> 电话沟通</strong></div><button className="ir-primary" disabled={!ready || !canConfirm || !!confirmed} onClick={() => persist('confirmed')}><CheckCheck size={17}/>{confirmed ? '确认结果已保存' : '确认方案并保存'}</button>{!canConfirm && <p className="ir-hint">补全车辆与房屋信息、房屋类型、所选方案的各项价格与保障，并完成三项确认。</p>}<button className="ir-draft" disabled={!ready} onClick={() => persist('draft')}><Save size={14}/> 保存沟通草稿</button><p className="ir-local-note">保存成功后可跨设备访问。确认记录不代表保单已生效。</p>{saved && <div className="ir-saved"><FileCheck2 size={14}/><span>最近保存：{new Date(saved.savedAt).toLocaleString('zh-CN')}</span></div>}</aside></div>
      <footer className="ir-footer"><button onClick={download}><Download size={14}/> 导出当前记录</button></footer>
      {message && <div className="ir-toast" role="status">{message}<button aria-label="关闭提示" onClick={() => setMessage('')}><X size={15}/></button></div>}
    </fieldset></main>
  </div>;
}
