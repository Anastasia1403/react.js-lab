import styled from 'styled-components';

interface WidthProps {
  width: string
}

export const StyledTable = styled.table`
display: block;
 width: 100%;
 border-collapse: collapse;
 overflow-y: auto;
  max-height: calc(100% - 52px);
  padding-right: 32px;
  margin-top: 16px;



 &::-webkit-scrollbar {
    width: 12px;
    background-color: rgba(220, 224, 236, 0.32);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(161, 171, 201, 0.32);
    border-radius: 6px;
  }
`;

export const TableRow = styled.tr`
background-color: #fff;
height: 64px;
border-radius: 4px;
border-bottom: 4px solid #F9FAFF;
`;

export const TableData = styled.td`
padding: 20px 16px;
`;

export const TableHeader = styled.th<WidthProps>`
width: ${(props) => props.width};
 color: #A1ABC9; 
 text-align: left;
 padding: 20px 16px;


`;
