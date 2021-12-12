import { add, format, set } from 'date-fns';
import { END_DAY_HOUR, START_DAY_HOUR } from './constants';

interface ITime {
  value: string | Date,
  label: string
}

const setTime = (selectedDate: Date, hours: number): ITime => {
  const newDate = set(selectedDate, {
    hours, minutes: 0, seconds: 0, milliseconds: 0,
  });
  const formatDate = format(newDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  return { label: format(add(newDate, { hours: 3 }), 'h:mm aaa'), value: formatDate };
};

// set all time of work
const setTimeList = (selectedDate: Date): ITime[] => {
  const timeList = [];
  let i = START_DAY_HOUR;
  for (; i < END_DAY_HOUR; i += 1) {
    timeList.push(setTime(selectedDate, i));
  }
  return timeList;
};

export default setTimeList;
