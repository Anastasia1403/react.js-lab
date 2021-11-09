import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/palm-clinic-logo.png";
import Navbar from "../../modules/Navbar/Navbar";
import NavButton from "../../modules/NavButton/NavButton";
import appointments from "./appointments";
import UserInfo from "../../modules/UserInfo/UserInfo";
import avatar from "./img/avatar.png";
import TabSection from "../../modules/TabSection/TabSection";
import { MainHeader } from "../../modules/MainHeader/MainHeader";
import { UserMain } from "../../modules/UserMain/UserMain";


const StyledUserView = styled.div`
  background-color: #e4ebff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  font-size: 15px;
  max-height: 100%;
  min-width: 380px;

  @media screen and (min-width: 600px) {
    padding: 0 64px 48px;
  }
`;



function UserView() {

  const [appoitmentsList, setAppoitments] = useState(appointments)

  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Larry Prinston" role="Patient" avatar={avatar} />

      </MainHeader>

      <UserMain>
        <Navbar>
          <NavButton>
            Profile
          </NavButton>
          <NavButton active>
            Appointments
          </NavButton>
          <NavButton>
            Resolutions
          </NavButton>
        </Navbar>

        <TabSection title="My Appountments" dataList={appoitmentsList} content="appointments" setAppointments={setAppoitments}/>
      </UserMain>
    </StyledUserView>
  );
}

export default UserView;
