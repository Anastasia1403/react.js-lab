import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import BottomSection from "../../modules/BottomSection/BottomSection";
import FormikSignIn from "../../modules/FormikSignIn/FormikSignIn";
import { EnterPanel, StartPage } from "../../modules/StartPage/StartPage";


const SignIn = (props) => {
  
  return (
    <StartPage>
      <EnterPanel>
        <Title>Sign In</Title>
        <FormikSignIn history={props.history}/>

        <Link to="/restore-password">
          Forgot Password?
        </Link>

        <BottomSection>
          Don’t have an account?
          <Link to="/sign-up">
            Sign up
          </Link>
        </BottomSection>
      </EnterPanel>
    </StartPage>
  );
};

export default SignIn;
