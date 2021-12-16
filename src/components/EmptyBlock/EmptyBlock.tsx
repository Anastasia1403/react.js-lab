import React from 'react';
import { EmptyBlockImg, EmptyBlockText, StyledEmptyBlock } from './styled';

interface EmptyBlockProps {
  text1: string,
  text2?: string,
}

const EmptyBlock = function ({ text1, text2 }: EmptyBlockProps) {
  return (
    <StyledEmptyBlock>
      <EmptyBlockImg />
      <EmptyBlockText>
        {text1}
      </EmptyBlockText>
      { text2 && (
      <EmptyBlockText>
        {text2}
      </EmptyBlockText>
      ) }

    </StyledEmptyBlock>
  );
};

export default EmptyBlock;
