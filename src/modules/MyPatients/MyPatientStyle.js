import styled from "styled-components";
import med from "./img/medical-history.svg";

export const StyledMyPatients = styled.section`
  height: calc(100% - 84px);

  @media screen and (min-width: 600px) {
    height: calc(100% - 116px);
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
`;

export const PatientsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  margin-top: 16px;
  height: calc(100% - 45px);
  overflow-y: auto;
  align-content: start;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(220, 224, 236, 0.32);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(161, 171, 201, 0.32);
    border-radius: 6px;
  }

  @media screen and (min-width: 600px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    margin-top: 32px;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const MyPatientsEmpty = styled.div`
  color: #a1abc9;
  background: url(${med}) center / 120px no-repeat;
  text-align: center;
  height: 200px;
  min-height: 400px;
  padding-top: 37vh;
  text-align: center;
`;