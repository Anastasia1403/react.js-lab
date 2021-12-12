import React from 'react';
import { StyledLink, Title } from 'components';
import { EnterPanel, StartPage } from 'pages/Auth/components/StartPage';
import { BottomSection } from 'pages/Auth/components/BottomSection';
import { SignUpForm } from './components/SignUpForm';

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
