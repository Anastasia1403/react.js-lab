import { RootState } from 'redux/store';

export const registrationStatusSelector = (state: RootState) => state.auth.registrationStatus;
export const profileSelector = (state: RootState) => state.auth.profile;
export const errorProfileSelector = (state: RootState) => state.auth.error;
export const profileLoadingSelector = (state: RootState) => state.auth.loading;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const userRoleSelector = (state: RootState) => (state.auth.profile
  ? state.auth.profile.role_name : null);
