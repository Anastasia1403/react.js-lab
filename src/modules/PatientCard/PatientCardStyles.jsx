import styled from "styled-components";


export const StyledPatientCard = styled.li`
  position: relative;
  list-style: none;
  border-radius: 12px;
  background-color: #fff;
  padding: 16px 16px 24px 16px;  
  min-width: 270px;
  height: fit-content;
  justify-self: stretch;

  @media screen and (min-width: 900px) {
    padding: 16px 40px 24px;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  `

export const PatientHeader = styled.header`
  display: flex;
  position: relative;
  padding-bottom: 16px;
  gap: 16px;
  align-items: center;

  &::after {
    position: absolute;
    bottom: 0;
    content: "";
    height: 1px;
    background-color: #dce0ec;
    width: calc(100% + 32px);
    left: -16px;
    @media screen and (min-width: 900px) {
      width: calc(100% + 80px);
      left: -40px;
    }
  }
`;

export const EditButton = styled.button`
    background: transparent;
`

export const PatientHeadline = styled.div`
flex-grow: 1;
`
export const Status = styled.div` 
    display: flex;
    gap: 8px;
    align-items: center;
`

export const StatusText = styled.div`
    color: #A1ABC9;
    font-size: 13px;
`

export const StatusIndicator = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => {if(props.appointmentStatus === "confirm") return '#34C197';
    if(props.appointmentStatus === "waiting") return '#7297FF';
    if(props.appointmentStatus === "canceled") return '#FF2567'}
    };
    `

export const PatientInfo = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`


export const PatientInfoItem = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
`

export const Time = styled.div`
    font-weight: 600;
`