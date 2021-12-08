import React from 'react';
import BottomSection from 'modules/BottomSection/BottomSection';
import SignUpForm from 'modules/SignUpForm/SignUpForm';
import { EnterPanel, StartPage } from 'modules/StartPage/StartPage';
import { StyledLink, Title } from 'components';

const SignUp = function () {
  return (
    <StartPage>
      <EnterPanel>
        <Title>Sign Up</Title>
        <SignUpForm />

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
