import { addHours, format } from 'date-fns';

const formatDate = (date) => {
  const endTime = format(addHours(new Date(date), 1), 'h aaa');
  const formattedDate = format(new Date(date), 'iii MMM dd, yyyy h aaa');
  return `${formattedDate} - ${endTime}`;
};

export default formatDate;
