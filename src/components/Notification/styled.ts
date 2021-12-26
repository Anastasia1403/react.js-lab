import styled from 'styled-components';
import { theme } from 'styles/theme';
import { NotificationProps } from './Notification';

export const StyledNotification = styled.div<Omit<NotificationProps, 'text'>>`
position: absolute;
bottom: 32px;
left: 32px;
max-width: 457px;
padding: 24px 24px 32px;
background-color: ${(props) => (props.type === 'error' ? theme.colors.red : theme.colors.green)};
border-radius: 8px;
display: ${(props) => (props.isVisible ? 'flex' : 'none')};
gap: 16px;
color: ${theme.colors.white};
 `;

export const NotificationContent = styled.div`
color: ${theme.colors.white};
`;

export const NotificationTitle = styled.p`
font-size: 17px;
font-weight: 700;
`;

export const NotificationText = styled.p`
font-size: 13px;
margin-top: 8px;
`;

export const CloseButton = styled.button`
width: 24px;
height: 24px;
background-color: transparent;
`;
