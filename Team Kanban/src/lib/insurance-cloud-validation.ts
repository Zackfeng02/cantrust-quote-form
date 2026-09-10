import { z } from 'zod';
import { isReview, withOptionalAB, withVehicles, withProperties, total, planPayments, type Review } from './insurance-review.ts';
import type { SavedProfile } from './insurance-profiles.ts';

export const cloudProfileSchema = z.object({
  id: z.string().min(1).max(128),
  version: z.number().int().min(0).max(2147483646).default(0),
  review: z.custom<Review>(isReview, '比价资料格式不正确'),
  status: z.enum(['draft', 'confirmed']),
  paymentView: z.enum(['year', 'month']).default('year'),
}).strip();

export function prepareCloudProfile(input: unknown, imported = false): SavedProfile {
  const parsed = cloudProfileSchema.parse(input);
  const review = withProperties(withVehicles(withOptionalAB(parsed.review)));
  // Legacy confirmation did not include the new property fields.
  const selected = review.selected;
  const complete = selected !== null && !!review.carriers[selected].trim() && total(review, selected) !== null &&
    !!review.name.trim() && /^\d{4}-\d{2}-\d{2}$/.test(review.effective) &&
    !Number.isNaN(Date.parse(review.effective)) && new Date(review.effective).toISOString().slice(0, 10) === review.effective &&
    review.vehicles!.every(v => !!v.name.trim()) && review.properties!.every(p => !!p.name.trim() && !!p.type) &&
    [...review.autoRows, ...review.properties!.flatMap(p => p.rows)].every(r => !!r.values[selected].trim() && r.values[selected].trim() !== '待确认') && review.checks.every(Boolean);
  if (parsed.status === 'confirmed' && !complete && !imported) throw new Error('INCOMPLETE_CONFIRMATION');
  const status = parsed.status === 'confirmed' && complete ? 'confirmed' : 'draft';
  return { id: parsed.id, version: parsed.version, review, status, savedAt: new Date().toISOString(), calculationVersion: 4,
    paymentView: parsed.paymentView, payments: review.carriers.map((_, i) => planPayments(review, i)) };
}
