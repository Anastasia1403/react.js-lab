import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getAppointments = createAsyncThunk(
  'patient/getAppointments',
  () => {
    try {
      return api.getAppointments();
    } catch (error) {
      return error;
    }
  },
);

const getAppointmentsSlice = createSlice({
  name: 'getAppointments',
  initialState: {
    loading: false,
    appointments: [],
    error: '',
  },
  extraReducers: {
    [getAppointments.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getAppointments.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    },
    [getAppointments.rejected]: (state, action) => {
      state.loading = false;
      state.appointments = [];
      state.error = action.error.message;
    },

  },
});

export default getAppointmentsSlice.reducer;
