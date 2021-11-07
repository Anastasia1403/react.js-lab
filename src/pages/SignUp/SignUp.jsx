import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import BottomSection from "../../modules/BottomSection/BottomSection";
import FormikSignUp from "../../modules/FormikSignUp/FormikSignUp";
import { EnterPanel, StartPage } from "../../modules/StartPage/StartPage";

const SignUp = (props) => {
  return (
    <StartPage>
      <EnterPanel>
        <Title> Sign Up</Title>
        <FormikSignUp history={props.history} />

        <Link className="link" to="/restore-password">
          Forgot Password?
        </Link>

        <BottomSection>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </BottomSection>
      </EnterPanel>
    </StartPage>
  );
};

export default SignUp;
