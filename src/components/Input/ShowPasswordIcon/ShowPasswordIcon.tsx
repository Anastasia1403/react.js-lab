import React from 'react';
import { ReactComponent as EyeCrossedIcon } from '../img/eye-crossed-out.svg';
import { ReactComponent as EyeIcon } from '../img/eye.svg';
import StyledToggler from './styled';

interface ShowPasswordIconProps {
  isPasswordVisible: boolean,
  onToggle: () => void,
}

const ShowPasswordIcon = function ({ isPasswordVisible, onToggle }: ShowPasswordIconProps) {
  const onToggleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    onToggle();
  };
  return (
    <StyledToggler onClick={onToggleClick}>
      {isPasswordVisible ? <EyeIcon /> : <EyeCrossedIcon />}
    </StyledToggler>
  );
};

export default ShowPasswordIcon;
