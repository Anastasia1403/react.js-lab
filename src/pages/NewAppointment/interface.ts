export interface IFormNewAppointment {
  date: string | Date | undefined,
  time: string | Date | undefined,
  occupation: string,
  doctor: string,
  reason: string,
  note: string,
}
