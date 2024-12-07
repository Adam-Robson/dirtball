const isWeekend = (date: Date): boolean => [0, 6].includes(date.getDay());

const originalDate = new Date('2024-12-07');

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
addDays(originalDate, 5);

export { isWeekend };
