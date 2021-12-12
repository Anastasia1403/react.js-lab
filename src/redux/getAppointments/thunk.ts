import { IAppointmentForPatient } from 'models/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';

interface Response {
  appointments: IAppointmentForPatient[],
  total: number
}

const getAppointments = createAsyncThunk(
  'patient/getAppointments',
  async () => {
    try {
      return await instance.get<Response>(url.getAppointments, { headers: authHeader() })
        .then((response) => (
          response.data.appointments
        ));
    } catch (error: any) {
      return error.response.data;
    }
  },
);
export default getAppointments;
