import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';
import authHeader from '../helper';

const addNewAppointment = createAsyncThunk(
  'patient/addAppointment',
  async (appointmentData, { rejectWithValue }) => {
    try {
      return await instance.post(url.addNewAppointment, appointmentData, { headers: authHeader() })
        .then((response) => response.statusText);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default addNewAppointment;
