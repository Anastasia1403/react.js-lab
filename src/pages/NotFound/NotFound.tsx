import React from 'react';
import { Styled404, StyledImg, Text } from './styled';

const NotFound = function () {
  return (
    <Styled404>
      <StyledImg />
      <Text>
        Oops...
        <br />
        We can’t seem to find the page you are looking for.
      </Text>
    </Styled404>
  );
};

export default NotFound;
