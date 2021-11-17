import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import { ReactComponent as ArrowNextIcon } from './img/angle-right-b.svg';
import { ReactComponent as ArrowPrevIcon } from './img/angle-left-b.svg';

const StyledCalendar = function ({
  value, onChange, blocked, minDate,
}) {
  return (
    <Calendar
      className={blocked ? 'blocked' : null}
      name="date"
      value={value}
      onClickDay={onChange}
      locale="en-US"
      maxDetail="month"
      minDetail="month"
      minDate={minDate}
      nextLabel={<ArrowNextIcon />}
      prevLabel={<ArrowPrevIcon />}
  // eslint-disable-next-line
      formatShortWeekday={(locale, date) => (locale, moment(date).format('dd').substring(0, 1))}
    />
  );
};

export default StyledCalendar;
