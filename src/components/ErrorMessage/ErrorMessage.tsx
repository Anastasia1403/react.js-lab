import styled from 'styled-components';
import { theme } from 'styles/theme';

const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: ${theme.colors.brightPink};
  line-height: 1.2;  
  
  @media screen and (min-width: 560px) {
  margin-top: 8px;

  }
  `;

export default ErrorMessage;
