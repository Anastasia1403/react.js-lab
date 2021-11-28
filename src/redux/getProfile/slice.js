import { createSlice } from '@reduxjs/toolkit';
import getProfile from './thunk';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    loading: false,
    profile: {},
    error: '',
  },

  extraReducers: {
    [getProfile.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
      state.profile = {};
      state.error = action.error.message;
    },

  },
});

export default profileSlice.reducer;
