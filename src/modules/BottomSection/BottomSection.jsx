import styled from 'styled-components';

const BottomSection = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 44px;
  left: 10vw;
  color: #a1abc9;

  @media screen and (min-width: 560px) {
    bottom: 26px;
    left: 96px;
  flex-direction: row;
  gap: 12px;
  }
`;

export default BottomSection;
