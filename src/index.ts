import {
  formatDate,
  parseDate,
  addDaysToDate,
  isNotWeekday,
  businessDaysBetween,
  isValidDate
} from './utils';

formatDate(new Date(), 'YYYY-MM-DD');
parseDate('2021-01-01');
addDaysToDate(new Date(), 5);
isNotWeekday(new Date());
businessDaysBetween(new Date(), new Date());
isValidDate(new Date());
