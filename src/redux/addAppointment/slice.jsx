import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const addAppointment = createAsyncThunk(
  'patient/addAppointment',
  async (appointmentData, { rejectWithValue }) => {
    try {
      const response = await api.addNewAppointment(appointmentData);
      return response.statusText;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const addAppointmentSlice = createSlice({
  name: 'addAppointment',
  initialState: {
    loading: false,
    status: [],
    error: '',
  },
  extraReducers: {
    [addAppointment.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [addAppointment.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = action.payload;
    },
    [addAppointment.rejected]: (state, action) => {
      state.loading = false;
      state.status = '';
      state.error = action.payload;
    },

  },
});

export default addAppointmentSlice.reducer;
