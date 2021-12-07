import React from 'react';
import BottomSection from 'modules/BottomSection/BottomSection';
import SignInForm from 'modules/SignInForm/SignInForm';
import { EnterPanel, StartPage } from 'modules/StartPage/StartPage';
import { StyledLink, Title } from 'components';

const SignIn = function () {
  return (
    <StartPage>
      <EnterPanel>
        <Title> Sign In</Title>
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
