import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;

  @media screen and (min-width: 600px) {
    margin-bottom: 56px;
    gap: 12px;
  }
`;

export default StyledNavbar;
