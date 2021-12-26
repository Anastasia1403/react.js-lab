import styled from 'styled-components';
import { theme } from 'styles/theme';

interface StyledInputProps {
  name: string,
  error?: string,
  touched?: boolean
}

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<StyledInputProps>`
  height: 40px;
  padding: ${(props) => ((props.name === 'password' || props.name === 'confirmPassword') ? '8px 48px' : '8px 8px 8px 48px')};
  border-radius: 8px;
  border: ${(props) => (props.error && props.touched ? `1px solid ${theme.colors.brightPink}` : `1px solid ${theme.colors.solidGrey}`)};
  color: ${theme.colors.black};
  font-size: 15px;
  width: 100%;

  &:focus,
  &:active {
    border: 1px solid  ${theme.colors.blue};
  }
  @media screen and (min-width: 560px) {
    height: 56px;
    padding: ${(props) => ((props.name === 'password' || props.name === 'confirmPassword') ? '16px 64px' : '16px 16px 16px 64px')};
    font-size: 17px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
    top: 8px;
    left: 16px;
    width: 24px;
    height: 24px;

    @media screen and (min-width: 560px) {    
        top: 16px;
    }
`;

export const ErrorMessage = styled.div`
  margin-top: 16px;
  font-size: 13px;
  color: ${theme.colors.brightPink};
  line-height: 1.2; 
  position: absolute;
  bottom: -16px;
  left: 0;
  
  @media screen and (min-width: 560px) {
  margin-top: 8px;
  bottom: -23px;


  }
  `;
