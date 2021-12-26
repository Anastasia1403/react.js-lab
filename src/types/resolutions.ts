import { Doctor, Patient } from './users';

export interface IResolutionForPatient<T> {
  id: string,
  appointment_id: string,
  next_appointment_date: T,
  resolution: string,
  visit_date: T,
  doctor: Doctor,
}

export interface IResolutionForDoctor<T> {
  id: string,
  appointment_id: string,
  next_appointment_date: T,
  resolution: string,
  visit_date: T,
  patient: Patient,
}

export interface IChangedResolution {
  resolution: string | null,
  resolutionID: string,
  appointmentID: string
}

export type Resolution<T> = IResolutionForPatient<T> | IResolutionForDoctor<T>;
