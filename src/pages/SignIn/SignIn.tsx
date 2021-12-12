import React from 'react';
import { StyledLink, Title } from 'components';
import { BottomSection } from 'pages/Auth/components/BottomSection';
import { EnterPanel, StartPage } from 'pages/Auth/components/StartPage';
import { SignInForm } from './components/SignInForm';

const SignIn = function () {
  return (
    <StartPage>
      <EnterPanel>
        <Title>Sign In</Title>
        <SignInForm />

        <StyledLink to="/restore-password">
          Forgot Password?
        </StyledLink>

        <BottomSection>
          Already have an account?
          <StyledLink to="/sign-up">Sign up</StyledLink>
        </BottomSection>
      </EnterPanel>
    </StartPage>
  );
};

export default SignIn;
