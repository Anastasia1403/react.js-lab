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
        (timeItem) => (

          <RadiobuttonLabel
            blocked={blocked}
            key={timeItem.value}
            htmlFor={timeItem.value}
            checked={timeItem.value === formik.values.time}
            disabled={!time.find((item) => item.value === timeItem.value)}
          >
            <Radiobutton
              type="radio"
              id={timeItem.value}
              name="time"
              value={timeItem.value}
              onChange={(event) => formik.handleChange(event)}
            />
            {timeItem.label}
          </RadiobuttonLabel>

        ),
      )}
    </StyledTableTime>
  );
};

export default TableTime;
