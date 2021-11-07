import React from "react";
import patients from "./patients";
import PatientCard from "../PatientCard/PatientCard.jsx";
import { MyPatientsEmpty, PatientsList, StyledMyPatients, Title } from "./MyPatientStyle";


function MyPatients() {
  return (
    <StyledMyPatients>
      <Title>My patients</Title>

      {Object.keys(patients).length ? (
        <PatientsList>
          {Object.values(patients).map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </PatientsList>
      ) : (
        <MyPatientsEmpty>
            You have no patients yet. <br />
            To create a patient profile, please contact your administrator.
         
        </MyPatientsEmpty>
      )}
    </StyledMyPatients>
  );
}

export default MyPatients;
