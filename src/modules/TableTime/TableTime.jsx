import React from 'react';
import { timeList } from '../NewAppointment/services';
import { Radiobutton, RadiobuttonLabel, StyledTableTime } from './styled';

const TableTime = function ({
  formik, blocked, blockedTime,
}) {
  return (
    <StyledTableTime role="group" blocked={blocked}>
      {timeList.map(
        (timeItem) => (

          <RadiobuttonLabel
            blocked={blocked}
            key={timeItem}
            htmlFor={timeItem}
            checked={timeItem === formik.values.time}
            disabled={blockedTime.includes(timeItem)}
          >
            <Radiobutton
              type="radio"
              id={timeItem}
              name="time"
              value={timeItem}
              onChange={(event) => {
                formik.handleChange(event);
              }}
            />
            {timeItem}
          </RadiobuttonLabel>

        ),
      )}
    </StyledTableTime>
  );
};

export default TableTime;
