import UserInfo from 'modules/UserInfo/UserInfo';
import React from 'react';
import styled from 'styled-components';
import logo from './img/palm-clinic-logo.png';

const StyledMainHeader = styled.header`

height: 72px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0 24px;
`;

const MainHeader = function ({ name, userRole, avatar }) {
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
