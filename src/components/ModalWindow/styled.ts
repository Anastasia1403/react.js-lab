import { Field } from 'formik';
import styled from 'styled-components';
import { ModalProps } from './ModalWindow';

export const Background = styled.div<Pick<ModalProps, 'isOpen'>>`
display: ${(props) => (props.isOpen ? 'block' : 'none')};
background-color: rgba(25, 27, 30, 0.8);
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
left: 0;
z-index: 2;

`;

export const StyledModal = styled.div`
background-color: #fff;
width: 500px;
/* height: 500px; */
position: absolute;
top: calc(50% - 250px);
left: calc(50% - 250px);
z-index: 3;
border-radius: 6px;
/* &:before {
    position: absolute;
    border-top: 1px solid #DCE0EC;
    background-color: #F9FAFF;
    height: 160px;
    width: 100%;
    content: '';
    bottom: 0;
    left: 0;
    } */

`;

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
padding: 40px;

`;
export const ModalTitle = styled.h4`
font-size: 20px;
font-weight: 600;
`;
export const Name = styled.h5`
display: flex;
gap: 16px;
font-weight: 600;
`;

export const StyledTextarea = styled(Field)`
margin-top: 16px;
border: 1px solid #DCE0EC;
height: 160px;
width: 100%;
resize: none;
border-radius: 6px;
padding: 16px 28px 16px 24px;
overflow-y: auto;

&::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(220, 224, 236, 0.32);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(161, 171, 201, 0.32);
    border-radius: 4px;
  }
`;

export const StyledLabel = styled.label`
color: #A1ABC9;
font-size: 13px;
`;

export const ModalFooter = styled.footer`
display: flex;
justify-content: space-between;
padding: 32px 40px;
border-top: 1px solid #DCE0EC;
background-color: #F9FAFF;
width: 100%;
border-radius: 0 0 6px 6px;

`;
