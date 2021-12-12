export interface IAppointmentForPatient {
  id: string,
  reason: string,
  note: string,
  patient_id: string,
  doctor_id: string,
  visit_date: string,
  status: 'canceled' | 'confirmed' | 'waiting',
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
  status: 'canceled' | 'confirmed' | 'waiting',
  patient: Patient,
}

export interface Patient {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export interface INewAppointment {
  date: Date;
  reason: string;
  note: string;
  doctorID: string;
}

export interface IUser {
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
}

export interface IUserLogin {
  userName: string,
  password: string,
}

export interface IUserProfile {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: Role
}

export enum Role {
  Doctor = 'Doctor',
  Patient = 'Patient',
  Admin = 'Admin',
}

export interface IDoctor {
  first_name: string,
  last_name: string,
  id: string
}

export interface ISpecialization {
  specialization_name: string,
  id: string
}

export interface IStatus {
  status: 'canceled' | 'confirmed' | 'waiting'
}

export interface IFormNewAppointment {
  date: string | Date | undefined,
  time: string | Date | undefined,
  occupation: string,
  doctor: string,
  reason: string,
  note: string,
}

export interface IOptions {
  value: string,
  label: string
}
