import { useFormikContext } from 'formik';
import { IFormNewAppointment } from 'pages/NewAppointment/interface';
import React from 'react';
import { freeTimeListSelector } from 'redux/doctors/selectors';
import { useAppSelector } from 'redux/hooks/hooks';
import { Radiobutton, RadiobuttonLabel, StyledTableTime } from './styled';
import setTimeList from './utils';

interface TableTimeProps {
  blocked: boolean
}

const TableTime = function ({ blocked }: TableTimeProps) {
  const time = useAppSelector(freeTimeListSelector);

  const { values, handleChange } = useFormikContext<IFormNewAppointment>();

  const selectedDate = values.date ? new Date(values.date) : new Date();
  const timeList = setTimeList(selectedDate);

  return (
    <StyledTableTime role="group" blocked={blocked}>
      {timeList.map(
        ({ value, label }) => (
          <RadiobuttonLabel
            data-testid="timeItem"
            blocked={blocked}
            key={label}
            htmlFor={label}
            checked={value === values.time}
            disabled={!time.find((item) => item.value === value)}
          >
            <Radiobutton
              type="radio"
              id={label}
              name="time"
              value={value.toString()}
              onChange={handleChange}
            />
            {label}
          </RadiobuttonLabel>
        )
        ,
      )}
    </StyledTableTime>
  );
};

export default TableTime;
