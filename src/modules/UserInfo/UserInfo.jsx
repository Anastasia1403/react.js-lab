import React from 'react';
import {
  AvatarWrap, Avatar, Info, Name, Role, User,
} from './styled';

const UserInfo = function ({ name, userRole, avatar }) {
  return (
    <User>
      <Info>
        <Name>{name}</Name>
        <Role>{userRole}</Role>
      </Info>

      <AvatarWrap>
        <Avatar src={avatar} alt="doctor" />
      </AvatarWrap>
    </User>
  );
};

export default UserInfo;
