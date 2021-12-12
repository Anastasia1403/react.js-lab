import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserProfile } from 'models/interfaces';
import getProfile from './thunk';

interface InitialState {
  loading: boolean,
  profile: null | IUserProfile,
  error: String,
}

const initialState: InitialState = {
  loading: false,
  profile: null,
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getProfile.fulfilled.type, (state, action: PayloadAction<IUserProfile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.profile = null;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
