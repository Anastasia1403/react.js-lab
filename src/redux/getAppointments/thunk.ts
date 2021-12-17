import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';
import { ResponseError } from 'redux/types';
import { IAppointmentForPatient } from 'types/appointments';

interface Response {
  appointments: IAppointmentForPatient[],
  total: number
}

const getAppointments = createAsyncThunk(
  'patient/getAppointments',
  async () => {
    try {
      return await instance.get<Response>(
        url.getAppointments(),
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
      return result;
    }
  },
);
export default getAppointments;
