import { describe, expect, test } from 'vitest';
import { addDaysToDate, isValidDate } from '../src/add-date';
import { isNotWeekday } from '../src/add-date';

describe('date utilities', () => {
  test('is weekend function', () => {
    expect(isNotWeekday(new Date('2024-12-14'))).toBe(true);
    expect(isNotWeekday(new Date('2024-12-15'))).toBe(true);
    expect(isNotWeekday(new Date('2024-12-16'))).toBe(false);
    expect(isNotWeekday(new Date('2024-12-17'))).toBe(false);
  });

  test('add days', () => {
    const originalDate = new Date('2024-12-07');
    const newDate = addDaysToDate(originalDate, 5);
    expect(newDate.toISOString().slice(0, 10)).toBe('2024-12-12');
  });

  test('should handle month transitions correctly when adding days', () => {
    const originalDate = new Date('2024-12-30');
    const newDate = addDaysToDate(originalDate, 5);
    expect(newDate.toISOString().slice(0, 10)).toBe('2025-01-04');
  });

  test('should handle month transitions correctly when subtracting days', () => {
    const originalDate = new Date('2024-03-01');
    const newDate = addDaysToDate(originalDate, -5);
    expect(newDate.toISOString().slice(0, 10)).toBe('2024-02-25');
  });

  test('should handle adding days across leap years', () => {
    const originalDate = new Date('2024-02-28');
    const newDate = addDaysToDate(originalDate, 2);
    expect(newDate.toISOString().slice(0, 10)).toBe('2024-03-01');
  });

  test('should handle subtracting days across leap years', () => {
    const originalDate = new Date('2024-03-01');
    const newDate = addDaysToDate(originalDate, -2);
    expect(newDate.toISOString().slice(0, 10)).toBe('2024-02-28');
  });

  test('should return the same date when adding 0 days', () => {
    const originalDate = new Date('2024-12-07');
    const newDate = addDaysToDate(originalDate, 0);
    expect(newDate.toISOString().slice(0, 10)).toBe('2024-12-07');
  });

  test('should handle large negative day offsets', () => {
    const originalDate = new Date('2024-01-01');
    const newDate = addDaysToDate(originalDate, -365);
    expect(newDate.toISOString().slice(0, 10)).toBe('2023-01-01');
  });

  test('should handle dates before 1970 correctly', () => {
    const originalDate = new Date('1969-12-30');
    const newDate = addDaysToDate(originalDate, 5);
    expect(newDate.toISOString().slice(0, 10)).toBe('1970-01-04');
  });

  test('should throw an error for invalid dates', () => {
    expect(() => addDaysToDate(new Date('invalid-date'), 5)).toThrow(
      'Invalid Date'
    );
  });

  test('should return true for valid dates', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date('2024-01-15'))).toBe(true);
  });

  test('should return false for invalid dates', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false);
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate({})).toBe(false);
    expect(isValidDate('2024-01-15')).toBe(false);
  });
});
