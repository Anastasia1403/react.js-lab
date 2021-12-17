import styled from 'styled-components';
import { sharedStyleButton } from 'components/ButtonSubmit/styled';

export const StyledNewAppointmentForm = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
gap: 50px;
@media screen and (min-width: 1000px) {
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

@media screen and (min-width: 1500px) {
grid-template-columns: 10.5fr 6fr 8fr;
gap: 104px;
}
`;

export const StageTitle = styled.h3`
color: #A1ABC9;
font-size: 17px;
margin-bottom: 40px;
`;

export const ButtonSubmit = styled.button`
  ${sharedStyleButton}
  justify-self: end;
  align-self: flex-end;
  &:disabled {
    background: #DCE0EC;
  }
  
  @media screen and (min-width: 1500px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
