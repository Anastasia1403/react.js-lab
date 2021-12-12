import { RootState } from 'redux/store';

export const status = (state: RootState) => state.registration.status;
export const error = (state: RootState) => state.registration.error;
