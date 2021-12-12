import styled from 'styled-components';

const StyledUserMain = styled.main`
border-radius: 16px 16px 0px 0px;
background-color: #f9faff;
padding: 40px 24px 0;
height: calc(100vh - 72px);
display: flex;
flex-direction: column;

@media screen and (min-width: 600px) {
  border-radius: 16px;
  padding: 40px 16px 0 48px;
  height: calc(100vh - 72px - 48px);
}
`;

export default StyledUserMain;
