import styled from 'styled-components';

const FormContainer = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media screen and (min-width: 560px) {
    gap: 40px;
  }
`;

export default FormContainer;
