import React, { useState } from "react";
import styled from "styled-components";
import arrow from "./img/angle-left-b.svg";
import FormikRestorePassword from "../../modules/FormikRestorePassword/FormikRestorePassword";
import { EnterPanel, StartPage } from "../../modules/StartPage/StartPage";



const BackButton = styled.button`
  background: transparent;
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  margin-bottom: 40px;
  color: #A1ABC9;
`;

const Title = styled.h1`
  max-width: 368px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;

    @media screen and (min-width: 560px) {
    margin-bottom: 32px;
  }
  `
const RestorePassword = (props) => {
  const [email, setEmail] = useState("");

  const resetPassword = (email) => {
    setEmail(email);
  };

  return (
    <StartPage>
      <EnterPanel>
        <Title>
          <BackButton
            className="link title__go-back-link"
            onClick={() => props.history.goBack()}
          >
            <img src={arrow} alt="go back" className="icon" />
          </BackButton>
          Restore Password
        </Title>

        {email ? (
          <Text>
            An email has been sent to <a href="#!">{email}</a>. Check your
            inbox, and click the reset link provided.
          </Text>
        ) : (
          <>
            <Text>
              Please use your email address, and we’ll send you the link to
              reset your password
            </Text>
            <FormikRestorePassword resetPassword={resetPassword} />
          </>
        )}
      </EnterPanel>
    </StartPage>
  );
};

export default RestorePassword;
