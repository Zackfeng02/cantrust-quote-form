export type Coverage = { label: string; en: string; values: string[] };
export type VehicleQuote = { id: string; name: string; premiums: string[] };
export const propertyTypes = ["自住房", "condo", "租客", "出租房", "出租condo", "度假屋"] as const;
export type PropertyQuote = { id: string; name: string; type: "" | typeof propertyTypes[number]; premiums: string[]; rows: Coverage[] };
export type Review = {
  properties?: PropertyQuote[];
  vehicles?: VehicleQuote[];
  name: string; phone: string; vehicle: string; property: string; currency: string; effective: string;
  carriers: string[]; auto: string[]; home: string[];
  autoRows: Coverage[]; homeRows: Coverage[]; selected: number | null; note: string; checks: boolean[];
};
export const STORAGE_KEY = 'insurance-review-v1';
export const initialReview: Review = {
  name: '林晓 · 示例客户', phone: '(416) 555-0128', vehicle: '2022 Toyota RAV4 · 1 辆车', property: '示例住宅 · 自住独立屋', currency: 'CAD', effective: '2026-10-01',
  carriers: ['现有承保公司', '报价公司 A', '报价公司 B'], auto: ['2640', '2160', '2400'], home: ['1680', '1440', '1560'],
  autoRows: [
    { label: '第三者责任', en: 'Third-party liability', values: ['$1,000,000', '$2,000,000', '$2,000,000'] },
    { label: '碰撞险自付额', en: 'Collision deductible', values: ['$1,000', '$1,000', '$500'] },
    { label: '综合险自付额', en: 'Comprehensive deductible', values: ['$1,000', '$1,000', '$500'] },
    { label: '租车代步', en: 'Loss of use', values: ['不包含', '$1,500', '$2,500'] },
    { label: '首次事故宽恕', en: 'Accident forgiveness', values: ['不包含', '不包含', '包含'] },
  ],
  homeRows: [
    { label: '房屋重建保额', en: 'Dwelling coverage', values: ['$750,000', '$750,000', '$850,000'] },
    { label: '个人财物', en: 'Personal property', values: ['$450,000', '$450,000', '$510,000'] },
    { label: '个人责任', en: 'Personal liability', values: ['$1,000,000', '$2,000,000', '$2,000,000'] },
    { label: '房屋险自付额', en: 'Property deductible', values: ['$1,000', '$1,000', '$1,000'] },
    { label: '下水道倒灌', en: 'Sewer backup', values: ['$25,000', '$50,000', '$100,000'] },
    { label: '地表水保障', en: 'Overland water', values: ['待确认', '不包含', '$50,000'] },
  ], selected: null, note: '', checks: [false, false, false],
};
export function total(review: Review, index: number): number | null {
  const parts = [autoPremium(review, index), homePremium(review, index)];
  if (parts.some(value => !/^\d+(\.\d{1,2})?$/.test(value.trim()))) return null;
  return parts.reduce((sum, value) => sum + Math.round(Number(value) * 100), 0) / 100;
}
export function isReview(value: unknown): value is Review {
  if (!value || typeof value !== 'object') return false;
  const v = value as Review;
  const strings = (a: unknown) => Array.isArray(a) && a.length >= 2 && a.every(x => typeof x === 'string');
  const rows = (a: unknown) => Array.isArray(a) && a.length > 0 && a.every(r => r && typeof r.label === 'string' && typeof r.en === 'string' && strings(r.values));
  return ['name','phone','vehicle','property','currency','effective','note'].every(k => typeof v[k as keyof Review] === 'string') && ['CAD','USD'].includes(v.currency) && (v.selected === null || (Number.isInteger(v.selected) && v.selected > 0 && v.selected < v.carriers?.length)) && strings(v.carriers) && strings(v.auto) && strings(v.home) && v.auto.length === v.carriers.length && v.home.length === v.carriers.length && rows(v.autoRows) && rows(v.homeRows) && [...v.autoRows, ...v.homeRows].every(r => r.values.length === v.carriers.length) && Array.isArray(v.checks) && v.checks.length === 3 && v.checks.every(x => typeof x === 'boolean') && (v.properties === undefined || (Array.isArray(v.properties) && v.properties.length > 0 && new Set(v.properties.map(p => p?.id)).size === v.properties.length && v.properties.every(p => p && typeof p.id === 'string' && !!p.id && typeof p.name === 'string' && (p.type === '' || propertyTypes.includes(p.type)) && strings(p.premiums) && p.premiums.length === v.carriers.length && rows(p.rows) && p.rows.every(r => r.values.length === v.carriers.length)))) && (v.vehicles === undefined || (Array.isArray(v.vehicles) && v.vehicles.length > 0 && new Set(v.vehicles.map(car => car?.id)).size === v.vehicles.length && v.vehicles.every(car => car && typeof car.id === 'string' && !!car.id && typeof car.name === 'string' && strings(car.premiums) && car.premiums.length === v.carriers.length)));
}

export const optionalABFields = [
  ['OPCF 47R 批单', 'OPCF 47R'],
  ['额外医疗、康复及护理保额', 'Supplementary medical / rehabilitation / attendant care'],
  ['收入替代（每周限额）', 'Income replacement'],
  ['非收入者补助', 'Non-earner'],
  ['照护者补助 · 灾难性伤残', 'Caregiver · catastrophic'],
  ['照护者补助 · 任何程度伤残', 'Caregiver · impairment'],
  ['教育费用损失', 'Lost educational expenses'],
  ['亲友探访费用', 'Expenses of visitors'],
  ['家务及房屋维护 · 灾难性伤残', 'Housekeeping · catastrophic'],
  ['家务及房屋维护 · 任何程度伤残', 'Housekeeping · impairment'],
  ['个人物品损失', 'Damage to personal items'],
  ['身故赔偿', 'Death'],
  ['丧葬费用', 'Funeral'],
  ['受抚养人照护费用', 'Dependant care'],
  ['通胀调整', 'Indexation'],
];
export function withOptionalAB(review: Review): Review {
  const missing = optionalABFields.filter(([, en]) => !review.autoRows.some(row => row.en === en));
  return { ...review, autoRows: [...review.autoRows, ...missing.map(([label, en]) => ({ label, en, values: review.carriers.map(() => '待确认') }))] };
}
export function paymentBreakdown(value: string, line: 'auto' | 'home') {
  if (!/^\d+(\.\d{1,2})?$/.test(value.trim())) return null;
  const base = Math.round(Number(value) * 100);
  if (!Number.isSafeInteger(base)) return null;
  const fee = Math.round(base * (line === 'auto' ? 13 : 30) / 1000);
  const tax = line === 'home' ? Math.round(base * 8 / 100) : 0;
  const annual = base + fee + tax;
  return { base: base / 100, fee: fee / 100, tax: tax / 100, annual: annual / 100, monthly: Math.round(annual / 12) / 100 };
}
export function planPayments(review: Review, i: number) {
  const auto = paymentBreakdown(autoPremium(review, i), 'auto');
  const home = paymentBreakdown(homePremium(review, i), 'home');
  return { auto, home, monthly: auto && home ? Math.round((auto.monthly + home.monthly) * 100) / 100 : null };
}

export function vehicleQuotes(review: Review): VehicleQuote[] {
  return review.vehicles ?? [{ id: 'legacy-vehicle', name: review.vehicle, premiums: [...review.auto] }];
}
export function autoPremium(review: Review, index: number): string {
  if (!review.vehicles) return review.auto[index];
  let cents = 0;
  for (const vehicle of review.vehicles) {
    const value = vehicle.premiums[index];
    if (typeof value !== 'string' || !/^\d+(\.\d{1,2})?$/.test(value.trim())) return '';
    cents += Math.round(Number(value) * 100);
    if (!Number.isSafeInteger(cents)) return '';
  }
  return (cents / 100).toFixed(2);
}
export function withVehicles(review: Review): Review {
  const next = { ...review, vehicles: vehicleQuotes(review) };
  return { ...next, auto: next.carriers.map((_, i) => autoPremium(next, i)), vehicle: next.vehicles.map(v => v.name || '未命名车辆').join(' / ') };
}

export function propertyQuotes(review: Review): PropertyQuote[] {
  return review.properties ?? [{ id: 'legacy-property', name: review.property, type: '', premiums: [...review.home], rows: structuredClone(review.homeRows) }];
}
export function homePremium(review: Review, index: number): string {
  let cents = 0;
  for (const property of propertyQuotes(review)) {
    const value = property.premiums[index];
    if (typeof value !== 'string' || !/^\d+(\.\d{1,2})?$/.test(value.trim())) return '';
    cents += Math.round(Number(value) * 100);
    if (!Number.isSafeInteger(cents)) return '';
  }
  return (cents / 100).toFixed(2);
}
export function withProperties(review: Review): Review {
  const next = { ...review, properties: propertyQuotes(review) };
  return { ...next, home: next.carriers.map((_, i) => homePremium(next, i)), property: next.properties.map(p => p.name || '未命名房屋').join(' / ') };
}
