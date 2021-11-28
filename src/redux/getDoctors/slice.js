import { createSlice } from '@reduxjs/toolkit';
import getDoctors from './thunk';

const doctorsSlice = createSlice({
  name: 'doctors',
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

export default doctorsSlice.reducer;
