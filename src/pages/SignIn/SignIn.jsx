import React from "react";
import StyledLink from "../../components/StyledLink/StyledLink";
import Title from "../../components/Title/Title";
import BottomSection from "../../modules/BottomSection/BottomSection";
import FormikSignIn from "../../modules/FormikSignIn/FormikSignIn";
import { EnterPanel, StartPage } from "../../modules/StartPage/StartPage";

const SignIn = (props) => {
  return (
    <StartPage>
      <EnterPanel>
        <Title> Sign In</Title>
        <FormikSignIn history={props.history} />

        <StyledLink to="/restore-password">
          Forgot Password?
        </StyledLink>

        <BottomSection>
          Already have an account? <StyledLink to="/sign-up">Sign up</StyledLink>
        </BottomSection>
      </EnterPanel>
    </StartPage>
  );
};

export default SignIn;
