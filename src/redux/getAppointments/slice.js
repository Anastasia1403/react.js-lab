import { createSlice } from '@reduxjs/toolkit';
import getAppointments from './thunk';

const appointmentsSlice = createSlice({
  name: 'appointments',
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

export default appointmentsSlice.reducer;
