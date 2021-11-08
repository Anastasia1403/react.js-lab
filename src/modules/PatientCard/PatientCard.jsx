import React from "react";
import edit from "./img/more-vertical.svg";
import clock from "./img/clock-three.svg";
import resolution from "./img/clipboard-blank.svg";
import {  AvatarWrap,  EditButton,  PatientHeader,  PatientHeadline,  PatientInfo,
  PatientInfoItem,  Status,  StatusIndicator,  StatusText,  StyledPatientCard,  Time,} from "./PatientCardStyles";

function PatientCard(props) {
  let status;
  if (props.patient.appointmentStatus === "confirm") {
    status = "Appointment is confirmed";
  } else if (props.patient.appointmentStatus === "waiting") {
    status = "Waiting for confirmation... ";
  } else if (props.patient.appointmentStatus === "canceled") {
    status = "Appointment is canceled";
  }

  return (
    <StyledPatientCard>
      <PatientHeader>
        <AvatarWrap>
          <img src={props.patient.imageUrl} alt="avatar" />
        </AvatarWrap>
        <PatientHeadline>
          <h3>
            {props.patient.firstName} {props.patient.lastName}
          </h3>
          <Status>
            <StatusIndicator
              appointmentStatus={props.patient.appointmentStatus}
            >
              {" "}
            </StatusIndicator>
            <StatusText>{status}</StatusText>
          </Status>
        </PatientHeadline>
        <EditButton>
          <img src={edit} alt="" />
        </EditButton>
      </PatientHeader>

      <PatientInfo>
        <PatientInfoItem>
          <img src={clock} alt="clock" />
          <Time>{props.patient.appointmentDate}</Time>
        </PatientInfoItem>
        <PatientInfoItem>
          <img src={resolution} alt="resolution" />
          <div>{props.patient.resolution}</div>
        </PatientInfoItem>
      </PatientInfo>
    </StyledPatientCard>
  );
}

export default PatientCard;
