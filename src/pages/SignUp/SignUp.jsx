import React from "react";
import StyledLink from "../../components/StyledLink/StyledLink";
import Title from "../../components/Title/Title";
import BottomSection from "../../modules/BottomSection/BottomSection";
import FormikSignUp from "../../modules/FormikSignUp/FormikSignUp";
import { EnterPanel, StartPage } from "../../modules/StartPage/StartPage";


const SignUp = (props) => {
  
  return (
    <StartPage>
      <EnterPanel>
        <Title>Sign Up</Title>
        <FormikSignUp history={props.history}/>

        <StyledLink to="/restore-password">
          Forgot Password?
        </StyledLink>

        <BottomSection>
          Don’t have an account?
          <StyledLink to="/sign-in">
            Sign in
          </StyledLink>
        </BottomSection>
      </EnterPanel>
    </StartPage>
  );
};

export default SignUp;
