import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getSpec = createAsyncThunk(
  'doctors/getSpecializations',
  () => {
    try {
      return api.getSpec();
    } catch (error) {
      return error;
    }
  },
);
export const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  (specId) => {
    try {
      return api.getDoctors(specId);
    } catch (error) {
      return error;
    }
  },
);

const getDoctorsSlice = createSlice({
  name: 'getDoctors',
  initialState: {
    loading: false,
    doctors: [],
    error: '',
  },

  extraReducers: {
    [getDoctors.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
    },
    [getDoctors.rejected]: (state, action) => {
      state.loading = false;
      state.doctors = [];
      state.error = action.error.message;
    },

  },
});

export default getDoctorsSlice.reducer;
