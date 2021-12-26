import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';
import { hideNotification, showNotification } from 'redux/notifications/slice';
import { ResponseError } from 'redux/types';
import { INewAppointment } from 'types/newAppointment';

const notification = (disp: any, type: 'success' | 'error', text: string) => {
  disp(showNotification({ type, text }));
  setTimeout(() => {
    disp(hideNotification());
  }, 5000);
};
export const createAppointment = createAsyncThunk(
  'appointments/create',
  async (appointmentData: INewAppointment, thunkAPI) => {
    try {
      return await instance.post(
        url.addNewAppointment(),
        appointmentData,
        { headers: authHeader() },
      )
        .then((response) => {
          notification(thunkAPI.dispatch, 'success', 'Appointment is created');
          return response.statusText;
        });
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      notification(thunkAPI.dispatch, 'error', result);
      return thunkAPI.rejectWithValue(result);
    }
  },
);
