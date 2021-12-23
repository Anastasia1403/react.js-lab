import { Role } from 'types/role';
import { MouseEventHandler } from 'react';
import { IAppointmentForDoctor } from 'types/appointments';
import { Resolution } from 'types/resolutions';

export interface IDropDownItem {
  name: string,
  callback: MouseEventHandler<HTMLLIElement>
  isActive?: boolean,
}
export interface CardProps {
  listItem: IAppointmentForDoctor,
  resolution: Resolution<string> | null,
  role: Role | null
}

export interface IModalInitialValues {
  resolution: string | null,
  appointmentID: string,
}
