import styled from 'styled-components';

export const StatusText = styled.div`
  color: #a1abc9;
  font-size: 13px;
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.appointmentStatus === 'confirm') return '#34C197';
    if (props.appointmentStatus === 'waiting') return '#7297FF';
    if (props.appointmentStatus === 'canceled') return '#FF2567';
    return null;
  }};
`;
