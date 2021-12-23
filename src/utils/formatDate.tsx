import { addHours, format } from 'date-fns';

const formatDate = (date: Date | string): string => {
  const endTime = format(addHours(new Date(date), 1), 'h aaa');
  const formattedDate = format(new Date(date), 'iii MMM dd, yyyy h aaa');
  return `${formattedDate} - ${endTime}`;
};

export const formatDateForResolution = (date: Date): string => format(new Date(date), 'MM/dd/yy');

export default formatDate;
