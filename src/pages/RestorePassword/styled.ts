import styled from 'styled-components';
import { theme } from 'styles/theme';

export const BackButton = styled.button`
  background: transparent;
  width: 24px;
  height: 24px;
`;

export const Text = styled.div`
  margin-bottom: 40px;
  color: ${theme.colors.mediumGrey};
`;

export const Title = styled.h1`
  max-width: 368px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: center;

    @media screen and (min-width: 560px) {
    margin-bottom: 32px;
  }
  `;
