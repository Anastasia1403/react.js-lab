import { useFormikContext } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import freeTimeList from '../../redux/getFreeTime/selectors';
import { Radiobutton, RadiobuttonLabel, StyledTableTime } from './styled';
import setTimeList from './utils';

const TableTime = function ({ blocked }) {
  const time = useSelector(freeTimeList);

  const { values, handleChange } = useFormikContext();

  const selectedDate = values.date ? new Date(values.date) : new Date();
  const timeList = setTimeList(selectedDate);

  return (
    <StyledTableTime role="group" blocked={blocked}>
      {timeList.map(
        ({ value, label }) => (
          <RadiobuttonLabel
            data-testid="timeItem"
            blocked={blocked}
            key={value}
            htmlFor={value}
            checked={value === values.time}
            disabled={!time.find((item) => item.value === value)}
          >
            <Radiobutton
              type="radio"
              id={value}
              name="time"
              value={value}
              onChange={handleChange}
            />
            {label}
          </RadiobuttonLabel>
        ),
      )}
    </StyledTableTime>
  );
};

export default TableTime;
