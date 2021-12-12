import { Role } from 'models/interfaces';
import React from 'react';
import {
  AvatarWrap, Avatar, Info, Name, RoleName, User,
} from './styled';

interface UserInfoProps {
  name: string,
  userRole: Role | undefined,
  avatar: string | undefined
}
const UserInfo = function ({ name, userRole, avatar }: UserInfoProps) {
  return (
    <User>
      <Info>
        <Name>{name}</Name>
        <RoleName>{userRole}</RoleName>
      </Info>
      <AvatarWrap>
        <Avatar src={avatar} alt="doctor" />
      </AvatarWrap>
    </User>
  );
};

export default UserInfo;
