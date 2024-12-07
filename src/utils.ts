/**
 * Check if a given date is not a weekday.
 *
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is a weekend, otherwise false
 */

export const isNotWeekday = (date: Date): boolean =>
  [0, 6].includes(date.getDay());

/**
 * Adds a specified number of days to a given date.
 *
 * @param {Date} date - The starting date
 * @param {number} days - Number of days to add (can be positive or negative)
 * @returns {Date} A new Date object with days added
 * @throws {TypeError} If input is not a valid date or days is not a number
 */
export function addDaysToDate(date: Date, days: number): Date {
  if (!(date instanceof Date) || date.toString() === 'Invalid Date') {
    throw new TypeError('First argument must be a valid Date object');
  }

  if (typeof days !== 'number' || Number.isNaN(days)) {
    throw new TypeError('Second argument must be a number');
  }

  const newDate = new Date(date.getTime());

  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

/**
 * Validates if a given value is a valid Date object.
 *
 * @param {any} date - The value to check
 * @returns {boolean} Whether the input is a valid Date
 */
export function isValidDate(date: any): boolean {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

/**
 * Calculates the number of business days between two dates.
 *
 * @param {string | Date} startDate - The start date
 * @param {string | Date} endDate - The end date
 * @returns {number} The number of business days between the two dates
 */
export const businessDaysBetween = (
  startDate: string | Date,
  endDate: string | Date
): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  for (
    let current = new Date(start);
    current <= end;
    current.setDate(current.getDate() + 1)
  ) {
    if (!isNotWeekday(current)) {
      count++;
    }
  }

  return count;
};

/**
 * Formats a Date object into a string based on the given format.
 *
 * @param {Date} date - The date to format
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD')
 * @returns {string} The formatted date string
 */
export const formatDate = (date: Date, format: string): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return format
    .replace('YYYY', String(yyyy))
    .replace('MM', mm)
    .replace('DD', dd);
};

/**
 * Parses a date string in the format 'YYYY-MM-DD' into a Date object.
 *
 * @param {string} dateString - The date string to parse
 * @returns {Date} The parsed Date object
 */
export const parseDate = (dateString: string): Date => {
  const parts = dateString.split('-');
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
};
