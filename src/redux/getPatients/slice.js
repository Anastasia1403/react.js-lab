import { createSlice } from '@reduxjs/toolkit';
import { getPatients } from './thunk';

const patientsSlice = createSlice({
  name: 'patients',
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

export default patientsSlice.reducer;
