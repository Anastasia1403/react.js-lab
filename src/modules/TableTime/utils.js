import { add, format, set } from 'date-fns';

const setTime = (selectedDate, hours) => {
  const newDate = set(selectedDate, {
    hours, minutes: 0, seconds: 0, milliseconds: 0,
  });
  const formatDate = format(newDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  return { label: format(add(newDate, { hours: 3 }), 'h:mm aaa'), value: formatDate };
};

// set all time of work
const setTimeList = (startDayHour, endDayHour, selectedDate) => {
  const timeList = [];
  let i = startDayHour;
  for (; i < endDayHour; i += 1) {
    timeList.push(setTime(selectedDate, i));
  }
  return timeList;
};

export default setTimeList;
