import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getPatients = createAsyncThunk(
  'doctor/getPatients',
  () => {
    try {
      return api.getPatients();
    } catch (error) {
      return error;
    }
  },
);

const getPatientsSlice = createSlice({
  name: 'getPatients',
  initialState: {
    loading: false,
    patients: [],
    error: '',
  },
  extraReducers: {
    [getPatients.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getPatients.fulfilled]: (state, action) => {
      state.loading = false;
      state.patients = action.payload;
    },
    [getPatients.rejected]: (state, action) => {
      state.loading = false;
      state.patients = [];
      state.error = action.error.message;
    },

  },
});

export default getPatientsSlice.reducer;
