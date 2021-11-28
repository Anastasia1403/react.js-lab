import { createAsyncThunk } from '@reduxjs/toolkit';
import { url, instance } from '../../api/url';
import authHeader from '../helper';

export const getPatients = createAsyncThunk(
  'doctor/getPatients',
  async (rejectWithValue) => {
    try {
      return await instance.get(url.getPatients, { headers: authHeader() })
        .then((response) => (

          response.data.appointments
        ));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getPatients;
