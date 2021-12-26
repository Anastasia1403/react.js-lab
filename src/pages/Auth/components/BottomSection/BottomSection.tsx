import styled from 'styled-components';
import { theme } from 'styles/theme';

const BottomSection = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 44px;
  left: 10vw;
  color: ${theme.colors.mediumGrey};

  @media screen and (min-width: 560px) {
    bottom: 26px;
    left: 96px;
  flex-direction: row;
  gap: 12px;
  }
`;

export default BottomSection;
