import React from 'react';
import { useSelector } from 'react-redux';
import freeTimeList from '../../redux/getFreeTime/selectors';

import { Radiobutton, RadiobuttonLabel, StyledTableTime } from './styled';
import setTimeList from './utils';

const TableTime = function ({ formik, blocked }) {
  const time = useSelector(freeTimeList);

  const selectedDate = formik.values.date ? new Date(formik.values.date) : new Date();

  const timeList = setTimeList(5, 18, selectedDate);

  return (
    <StyledTableTime role="group" blocked={blocked}>
      {timeList.map(
        ({ value, label }) => (

          <RadiobuttonLabel
            blocked={blocked}
            key={value}
            htmlFor={value}
            checked={value === formik.values.time}
            disabled={!time.find((item) => item.value === value)}
          >
            <Radiobutton
              type="radio"
              id={value}
              name="time"
              value={value}
              onChange={formik.handleChange}
            />
            {label}
          </RadiobuttonLabel>

        ),
      )}
    </StyledTableTime>
  );
};

export default TableTime;
