import React, { useMemo } from 'react';
import { StatusIndicator, StatusText } from './styled';

const Status = function ({ appointmentStatus }) {
  const status = useMemo(() => {
    if (appointmentStatus === 'canceled') return 'Appointment is canceled';
    if (appointmentStatus === 'confirm') return 'Appointment is confirmed';
    if (appointmentStatus === 'waiting') return 'Waiting for confirmation...';
    return null;
  }, [appointmentStatus]);

  return (
    <>
      <StatusIndicator appointmentStatus={appointmentStatus} />
      <StatusText>{status}</StatusText>
    </>
  );
};

export default Status;
