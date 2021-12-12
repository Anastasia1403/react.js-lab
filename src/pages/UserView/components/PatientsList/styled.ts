import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
  margin-top: 16px;
  height: calc(100% - 52px);
  overflow-y: auto;
  align-content: start;
  padding-right: 12px;


  &::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(220, 224, 236, 0.32);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(161, 171, 201, 0.32);
    border-radius: 6px;
  }

  @media screen and (min-width: 600px) {
    padding-right: 32px;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default List;
