import { IAppointmentForDoctor } from 'types/appointments';
import { url, instance } from 'api/url';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ResponseError } from 'redux/types';
import authHeader from '../helper';

interface Response {
  appointments: IAppointmentForDoctor[],
  total: number
}

export const getPatients = createAsyncThunk(
  'doctor/getPatients',
  async (_, { rejectWithValue }) => {
    try {
      return await instance.get<Response>(
        url.getPatients(),
        {
          headers: authHeader(),
          params: { offset: 0, limit: 20 },
        },
      )
        .then((response) => (
          response.data.appointments
        ));
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      return rejectWithValue(result);
    }
  },
);

export default getPatients;
