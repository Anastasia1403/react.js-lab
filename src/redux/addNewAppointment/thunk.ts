import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';
import { hideNotification, showNotification } from 'redux/showNotification/slice';
import { ResponseError } from 'redux/types';
import { INewAppointment } from 'types/newAppointment';

const addNewAppointment = createAsyncThunk(
  'patient/addAppointment',
  async (appointmentData: INewAppointment, thunkAPI) => {
    try {
      return await instance.post(
        url.addNewAppointment(),
        appointmentData,

        { headers: authHeader() },
      )
        .then((response) => {
          thunkAPI.dispatch(showNotification({ type: 'success', text: 'Appointment is created', isVisible: true }));
          setTimeout(() => {
            thunkAPI.dispatch(hideNotification());
          }, 5000);
          return response.statusText;
        });
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      thunkAPI.dispatch(showNotification({ type: 'error', text: result, isVisible: true }));
      setTimeout(() => {
        thunkAPI.dispatch(hideNotification());
      }, 5000);
      return thunkAPI.rejectWithValue(result);
    }
  },
);

export default addNewAppointment;
