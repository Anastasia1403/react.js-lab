import styled from 'styled-components';

export const StyledTableTime = styled.div`

width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
pointer-events: ${(props) => (props.blocked ? 'none' : 'auto')};
`;

export const RadiobuttonLabel = styled.label`

border-radius: 8px;
padding: 8px 16px;
cursor: pointer;
pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
font-weight: 600;

background-color: ${(props) => (props.disabled ? '#DCE0EC' : '#fff')};

border: ${(props) => {
    if (props.disabled) return '1px solid #DCE0EC';
    return props.checked ? '1px solid #7297FF' : '1px solid #FFF';
  }};

color: ${(props) => {
    if (props.disabled) return '#F9FAFF';
    return props.checked ? '#7297FF' : '#202225';
  }};
  
pointer-events: ${(props) => (props.blocked ? 'none' : 'auto')};


`;

export const Radiobutton = styled.input`
  display: none;
  `;
