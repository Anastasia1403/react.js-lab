import { Doctor, Patient } from './users';

export interface IAppointmentForPatient {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: StatusType,
  doctor: Doctor,
}

export interface IAppointmentForDoctor {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: StatusType,
  patient: Patient,
}

export type Appointment = IAppointmentForDoctor | IAppointmentForPatient;
export type StatusType = 'canceled' | 'confirmed' | 'waiting';

export interface IOptions {
  value: string,
  label: string
}
