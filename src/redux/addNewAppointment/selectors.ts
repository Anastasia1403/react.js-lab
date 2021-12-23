import { RootState } from 'redux/store';

export const status = (state: RootState) => state.appointment.status;
export const error = (state: RootState) => state.appointment.error;
