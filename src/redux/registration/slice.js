import { createSlice } from '@reduxjs/toolkit';
import registration from './thunk';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    status: '',
    error: '',
  },
  extraReducers: {
    [registration.fulfilled]: (state, action) => {
      state.status = action.payload;
    },
    [registration.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },

  },
});

export default registrationSlice.reducer;
