import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getProfile = createAsyncThunk(
  'auth/profile',
  () => {
    try {
      return api.getProfile();
    } catch (error) {
      return error;
    }
  },
);

const getProfileSlice = createSlice({
  name: 'getProfile',
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

export default getProfileSlice.reducer;
