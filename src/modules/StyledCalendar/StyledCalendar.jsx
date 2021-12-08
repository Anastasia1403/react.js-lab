import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import { useFormikContext } from 'formik';
import getFreeTime from 'redux/getFreeTime/thunk';
import { ReactComponent as ArrowNextIcon } from './img/angle-right-b.svg';
import { ReactComponent as ArrowPrevIcon } from './img/angle-left-b.svg';

const StyledCalendar = function ({
  value, blocked, minDate,
}) {
  const dispatch = useDispatch();

  const { values, setFieldValue } = useFormikContext();

  const onDataChange = (date) => {
    const formatDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    setFieldValue('date', formatDate);
    dispatch(getFreeTime({ doctorId: values.doctor, date: formatDate }));
  };
  return (
    <Calendar
      data-testid="calendar"
      className={blocked ? 'blocked' : null}
      name="date"
      value={value}
      onClickDay={onDataChange}
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
