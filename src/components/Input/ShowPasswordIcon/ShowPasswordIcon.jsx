import React from 'react';
import styled from 'styled-components';
import { ReactComponent as EyeCrossedIcon } from '../img/eye-crossed-out.svg';
import { ReactComponent as EyeIcon } from '../img/eye.svg';

const StyledToggler = styled.button`
  background: transparent;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 8px;

  @media screen and (min-width: 560px) {
    right: 24px;
    top: 16px;
  }
`;

const ShowPasswordIcon = function ({ isPasswordVisible, onToggle, name }) {
  const onToggleClick = (event) => {
    event.preventDefault();
    onToggle();
  };
  return (
    <StyledToggler onClick={onToggleClick}>
      {isPasswordVisible ? <EyeIcon alt={name} /> : <EyeCrossedIcon alt={name} />}
    </StyledToggler>
  );
};

export default ShowPasswordIcon;
