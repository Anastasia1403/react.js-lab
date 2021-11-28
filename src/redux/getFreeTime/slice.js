import { createSlice } from '@reduxjs/toolkit';
import getFreeTime from './thunk';

const freeTimeSlice = createSlice({
  name: 'freeTime',
  initialState: {
    loading: false,
    time: [],
    error: '',
  },

  extraReducers: {
    [getFreeTime.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getFreeTime.fulfilled]: (state, action) => {
      state.loading = false;
      state.time = action.payload;
    },
    [getFreeTime.rejected]: (state, action) => {
      state.loading = false;
      state.time = [];
      state.error = action.error.message;
    },

  },
});

export default freeTimeSlice.reducer;
