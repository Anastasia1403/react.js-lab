import React from "react";
import styled from "styled-components";
import logo from "./img/palm-clinic-logo.png";
import DoctorInfo from "../../modules/DoctorInfo/DoctorInfo";
import MyPatients from "../../modules/MyPatients/MyPatients";
import Navbar from "../../modules/Navbar/Navbar";


const StyledDoctorView = styled.div`
  background-color: #e4ebff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: 1.6;
  font-size: 15px;
  max-height: 100%;

  @media screen and (min-width: 600px) {
    padding: 0 64px 48px;
  }
`;

const MainHeader = styled.header`
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const DoctorMain = styled.main`
  border-radius: 16px 16px 0px 0px;
  background-color: #f9faff;
  padding: 40px 24px 0;
  height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    border-radius: 16px;
    padding: 40px 60px 0;
    height: calc(100vh - 72px - 48px);
  }
`;

function DoctorView() {
  return (
    <StyledDoctorView>

      <MainHeader>
        <a href="#!" class="logo">
          <img src={logo} alt="palm clinic logo"/>
        </a>
        <DoctorInfo />
      </MainHeader>

      <DoctorMain>
        <Navbar />
        <MyPatients />
      </DoctorMain>

    </StyledDoctorView>
  );
}

export default DoctorView;
