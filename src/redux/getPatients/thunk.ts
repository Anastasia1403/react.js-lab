import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAppointmentForDoctor } from 'models/interfaces';
import { url, instance } from '../../api/url';
import authHeader from '../helper';

interface Response {
  appointments: IAppointmentForDoctor[],
  total: number
}

export const getPatients = createAsyncThunk(
  'doctor/getPatients',
  async (_, { rejectWithValue }) => {
    try {
      return await instance.get<Response>(url.getPatients, { headers: authHeader() })
        .then((response) => (
          response.data.appointments
        ));
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getPatients;
