import { describe, expect, test } from 'vitest';
import { isWeekend } from '../src/date-utils';

describe('date utilities', () => {
  test('is weekend function', () => {
    expect(isWeekend(new Date('2024-12-14'))).toBe(true);
    expect(isWeekend(new Date('2024-12-15'))).toBe(true);
    expect(isWeekend(new Date('2024-12-16'))).toBe(false);
    expect(isWeekend(new Date('2024-12-17'))).toBe(false);
  });
});
