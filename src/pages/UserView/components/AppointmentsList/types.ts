export type Card = IPatientCard | IAppointmentCard;

export interface IPatientCard {
  id: string,
  patient: Patient,
  status: 'canceled' | 'confirmed' | 'waiting',
  resolution: string,
  visit_date: string,
}

export interface Patient {
  photo: string,
  first_name: string,
  last_name: string,
}

export interface IAppointmentCard {
  id: string,
  reason: string,
  'note': 'string',
  'patient_id': 'string',
  'doctor_id': 'string',
  visit_date: string,
  doctor: Doctor,

}

export interface Doctor {
  photo: string,
  specialization_name: string,
  first_name: string,
  last_name: string,
}
