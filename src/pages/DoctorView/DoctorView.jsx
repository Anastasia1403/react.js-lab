import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/palm-clinic-logo.png";
import Navbar from "../../modules/Navbar/Navbar";
import NavButton from "../../modules/NavButton/NavButton";
import patients from "./patients";
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



function DoctorView() {

  const [patientsList, setPatients] = useState(patients)


  return (
    <StyledUserView>
      <MainHeader>
        <a href="#!">
          <img src={logo} alt="palm clinic logo" />
        </a>
        <UserInfo name="Miranda Nelson" role="Doctor" avatar={avatar} />
      </MainHeader>

      <UserMain>
        <Navbar>
          <NavButton active>
            Patients
          </NavButton>
          <NavButton>
            Resolutions
          </NavButton>
        </Navbar>

        <TabSection title="My patients" dataList={patientsList} content="patients" setPatients={setPatients}/>

      </UserMain>
    </StyledUserView>
  );
}

export default DoctorView;
