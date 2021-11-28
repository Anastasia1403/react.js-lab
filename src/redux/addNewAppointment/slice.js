import { createSlice } from '@reduxjs/toolkit';
import addNewAppointment from './thunk';

const newAppointmentSlice = createSlice({
  name: 'newAppointment',
  initialState: {
    loading: false,
    status: [],
    error: '',
  },
  extraReducers: {
    [addNewAppointment.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [addNewAppointment.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = action.payload;
    },
    [addNewAppointment.rejected]: (state, action) => {
      state.loading = false;
      state.status = '';
      state.error = action.payload;
    },

  },
});

export default newAppointmentSlice.reducer;
