import { EnterPanel, StartPage } from 'pages/Auth/components/StartPage';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RestorePasswordForm } from './components/RestorePasswordForm';
import BackArrowIcon from './img/angle-left-b.svg';
import { BackButton, Text, Title } from './styled';

const RestorePassword = function () {
  const [email, setEmail] = useState('');
  const history = useHistory();

  const resetPassword = (emailAddress: string) => {
    setEmail(emailAddress);
  };

  return (
    <StartPage>
      <EnterPanel>
        <Title>
          <BackButton
            onClick={() => history.goBack()}
          >
            <img src={BackArrowIcon} alt="arrow" />
          </BackButton>
          Restore Password
        </Title>

        { email ? (
          <Text>
            An email has been sent to
            <a href="#!">{email}</a>
            . Check your
            inbox, and click the reset link provided.
          </Text>
        ) : (
          <>
            <Text>
              Please use your email address, and we’ll send you the link to
              reset your password
            </Text>
            <RestorePasswordForm resetPassword={resetPassword} />
          </>
        )}
      </EnterPanel>
    </StartPage>
  );
};

export default RestorePassword;
