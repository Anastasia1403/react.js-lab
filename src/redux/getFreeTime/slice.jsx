import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getFreeTime = createAsyncThunk(
  'time',
  ({ doctorId, date }) => {
    try {
      return api.getFreeTime({ doctorId, date });
    } catch (error) {
      return error;
    }
  },
);

const getFreeTimeSlice = createSlice({
  name: 'getDoctors',
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

export default getFreeTimeSlice.reducer;
