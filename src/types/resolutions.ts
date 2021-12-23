export interface IResolutionForPatient<T> {
  id: string,
  appointment_id: string,
  next_appointment_date: T,
  resolution: string,
  visit_date: T,
  doctor: Doctor,
}

export interface Doctor {
  last_name: string,
  first_name: string,
  id: string,
  photo: string,
  specialization_name: string
}

export interface IResolutionForDoctor<T> {
  id: string,
  appointment_id: string,
  next_appointment_date: T,
  resolution: string,
  visit_date: T,
  patient: Patient,
}

export interface Patient {
  last_name: string,
  first_name: string,
  id: string,
  photo: string
}

export interface INewResolution {
  resolution: string | null,
  appointmentID: string
}

export type Resolution<T> = IResolutionForPatient<T> | IResolutionForDoctor<T>;
