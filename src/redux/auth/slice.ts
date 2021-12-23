import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from 'types/role';
import loadProfile from './loadProfile.thunk';
import login from './login.thunk';
import registration from './registration.thunk';

interface IInitialState {
  loading: boolean,
  isLoggedIn: boolean,
  registrationStatus: string,
  profile: null | IUserProfile,
  error: string,
}

export interface IUserProfile {
  id: string,
  first_name: string,
  last_name: string,
  photo: string,
  role_name: Role
}
const initialState: IInitialState = {
  loading: false,
  isLoggedIn: false,
  registrationStatus: '',
  profile: null,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled.type, (state, action: PayloadAction<string>) => {
        state.registrationStatus = action.payload;
      })
      .addCase(registration.rejected.type, (state) => {
        state.registrationStatus = 'error';
      })
      .addCase(login.fulfilled.type, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(login.rejected.type, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(loadProfile.pending.type, (state) => {
        state.loading = true;
      })
      .addCase(loadProfile.fulfilled.type, (state, action: PayloadAction<IUserProfile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(loadProfile.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.profile = null;
        state.error = action.payload;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
