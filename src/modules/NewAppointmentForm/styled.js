import styled from 'styled-components';

export const StyledNewAppointmentForm = styled.form`
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

export const Stage = styled.h3`
color: #A1ABC9;
font-size: 17px;
margin-bottom: 40px;
`;
