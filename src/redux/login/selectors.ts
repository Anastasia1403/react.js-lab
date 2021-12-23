import { RootState } from 'redux/store';

export const isLoggedIn = (state: RootState) => state.login.isLoggedIn;
export const error = (state: RootState) => state.login.error;
