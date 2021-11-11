import React from 'react';
import StyledLink from '../../components/StyledLink/StyledLink';
import Title from '../../components/Title/Title';
import BottomSection from '../../modules/BottomSection/BottomSection';
import SignUpForm from '../../modules/SignUpForm/SignUpForm';
import { EnterPanel, StartPage } from '../../modules/StartPage/StartPage';

const SignUp = function ({ history }) {
  return (
    <StartPage>
      <EnterPanel>
        <Title>Sign Up</Title>
        <SignUpForm history={history} />

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
