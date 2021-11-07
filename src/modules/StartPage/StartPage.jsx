import styled from "styled-components";

import bg from "./img/bg.png";

export const StartPage = styled.div`
  background: url(${bg}) top left / contain no-repeat;
  font-size: 15px;
  height: 100%;
  padding-top: 72px;

  @media screen and (min-width: 560px) {
    background-size: auto;
    padding-top: 0;
  }

  @media screen and (min-height: 816px) and (min-width: 560px) {
    background-size: cover;
  }
`;

export const EnterPanel = styled.main`

    position: relative;
    width: 100%;
    height: calc(100vh - 72px);
    min-height: 550px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 32px 10vw 100px;
    background-color: #f9faff;
    border-radius: 42px 42px 0 0;

  @media screen and (min-width: 560px) {
    width: 560px;
    height: 100%;
    min-height: 690px;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: stretch;
    padding: 10px 96px 48px;
    border-radius: 0;
  }

  @media screen and (min-height: 816px) and (min-width: 560px) {
    padding: 64px 96px 120px;
  }
`;
