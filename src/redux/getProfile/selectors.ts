import { RootState } from 'redux/store';

export const userProfile = (state: RootState) => state.profile.profile;
export const userProfileLoading = (state: RootState) => state.profile.loading;
