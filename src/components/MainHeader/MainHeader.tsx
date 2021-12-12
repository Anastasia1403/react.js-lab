import { UserInfo } from 'components/UserInfo';
import { Role } from 'models/interfaces';
import React from 'react';

import logo from './img/palm-clinic-logo.png';
import StyledMainHeader from './styled';

interface User {
  name: string,
  userRole: Role | undefined,
  avatar: string | undefined
}

const MainHeader = function ({ name, userRole, avatar }: User) {
  return (
    <StyledMainHeader>
      <a href="#!">
        <img src={logo} alt="palm clinic logo" />
      </a>
      <UserInfo name={name} userRole={userRole} avatar={avatar} />
    </StyledMainHeader>
  );
};

export default MainHeader;
