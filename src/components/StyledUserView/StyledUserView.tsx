import styled from 'styled-components';
import { theme } from 'styles/theme';

const StyledUserView = styled.div`
  background-color: ${theme.colors.skyGrey};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  font-size: 15px;
  min-width: 380px;

  @media screen and (min-width: 600px) {
    padding: 0 64px 48px;
  }
`;

export default StyledUserView;
