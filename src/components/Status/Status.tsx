import { IStatus } from 'models/interfaces';
import React, { useMemo } from 'react';
import { StatusIndicator, StatusText } from './styled';

const Status = function ({ status }:IStatus) {
  const statusText = useMemo(() => {
    switch (status) {
      case 'canceled': {
        return 'Appointment is canceled';
      }
      case 'confirmed': {
        return 'Appointment is confirmed';
      }
      case 'waiting': {
        return 'Waiting for confirmation...';
      }
      default: return null;
    }
  }, [status]);

  return (
    <>
      <StatusIndicator status={status} />
      <StatusText>{statusText}</StatusText>
    </>
  );
};

export default Status;
