import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';
import authHeader from '../helper';

const getAppointments = createAsyncThunk(
  'patient/getAppointments',
  async (rejectWithValue) => {
    try {
      return await instance.get(url.getAppointments, { headers: authHeader() })
        .then((response) => (
          response.data.appointments
        ));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export default getAppointments;
