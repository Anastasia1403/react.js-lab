import styled from 'styled-components';
import { theme } from 'styles/theme';
import { StatusType } from 'types/appointments';

export const StatusText = styled.div`
  color: ${theme.colors.mediumGrey};
  font-size: 13px;
`;

export const StatusIndicator = styled.div<{ status: StatusType }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.status === 'confirmed') return theme.colors.green;
    if (props.status === 'waiting') return theme.colors.blue;
    if (props.status === 'canceled') return theme.colors.red;
    return null;
  }};
`;
