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

export interface Doctor {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string
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

export interface Patient {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export type StatusType = 'canceled' | 'confirmed' | 'waiting';

export interface IOptions {
  value: string,
  label: string
}
