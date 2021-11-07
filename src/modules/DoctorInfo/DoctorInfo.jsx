import React from "react";
import avatar from "./img/avatar.png";
import styled from "styled-components";

const Doctor = styled.div`
  display: flex;
  gap: 16px;
`;
const Info = styled.div`
  display: none;
  
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.3;
  }
`;
const Name = styled.div`
  font-weight: 600;
`;
const Prof = styled.div`
  font-size: 13px;
  color: #a1abc9;
`;
const AvatarWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #34c197;
    border: 3px solid #e4ebff;
  }
`;

function DoctorInfo(props) {
  return (
    <Doctor>
      <Info>
        <Name>Miranda Nelson</Name>
        <Prof class="doctor__prof">Doctor</Prof>
      </Info>

      <AvatarWrap>
        <img class=" avatar doctor__avatar" src={avatar} alt="doctor" />
      </AvatarWrap>
    </Doctor>
  );
}

export default DoctorInfo;
