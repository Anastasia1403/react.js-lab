import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';
import { hideNotification, showNotification } from 'redux/notifications/slice';
import { ResponseError } from 'redux/types';
import { IAppointmentForDoctor, IAppointmentForPatient } from 'types/appointments';
import { Role } from 'types/role';

interface ResponseDoctor {
  appointments: IAppointmentForDoctor[],
  total: number
}

interface ResponsePatient {
  appointments: IAppointmentForPatient[],
  total: number
}

export const loadAppointments = createAsyncThunk(
  'appointments/load',
  async (role: Role, thunkAPI) => {
    try {
      const token = authHeader();
      if (role === 'Patient') {
        return await instance.get<ResponsePatient>(
          url.getAppointmentsForPatient(),
          {
            headers: token,
            params: { offset: 0, limit: 20 },
          },
        )
          .then((response) => (
            response.data.appointments
          ));
      }
      if (role === 'Doctor') {
        return await instance.get<ResponseDoctor>(
          url.getAppointmentsForDoctor(),
          {
            headers: token,
            params: { offset: 0, limit: 20 },
          },
        )
          .then((response) => response.data.appointments);
      } return null;
    } catch (error: any) {
      const result = error.response ? (error as ResponseError).response.data : error.message;

      return thunkAPI.rejectWithValue(result);
    }
  },
);

export const deleteAppointment = createAsyncThunk(
  'appointments/delete',
  async (appointmentId: string, thunkAPI) => {
    try {
      return await instance.delete(
        url.deleteAppointment(appointmentId),
        { headers: authHeader() },
      )
        .then((response) => {
          thunkAPI.dispatch(showNotification({ type: 'success', text: 'Appointment is deleted' }));
          setTimeout(() => {
            thunkAPI.dispatch(hideNotification());
          }, 5000);
          thunkAPI.dispatch(loadAppointments(Role.Doctor));
          return response.statusText;
        });
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      thunkAPI.dispatch(showNotification({ type: 'error', text: result }));
      setTimeout(() => {
        thunkAPI.dispatch(hideNotification());
      }, 5000);
      return thunkAPI.rejectWithValue(result);
    }
  },
);
