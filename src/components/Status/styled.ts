import { IStatus } from 'models/interfaces';
import styled from 'styled-components';

export const StatusText = styled.div`
  color: #a1abc9;
  font-size: 13px;
`;

export const StatusIndicator = styled.div<IStatus>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === 'confirmed') return '#34C197';
    if (props.status === 'waiting') return '#7297FF';
    if (props.status === 'canceled') return '#FF2567';
    return null;
  }};
`;