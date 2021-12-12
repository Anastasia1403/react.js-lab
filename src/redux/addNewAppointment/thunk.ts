import { INewAppointment } from 'models/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';

const addNewAppointment = createAsyncThunk(
  'patient/addAppointment',
  async (appointmentData: INewAppointment, { rejectWithValue }) => {
    try {
      return await instance.post(url.addNewAppointment, appointmentData, { headers: authHeader() })
        .then((response) => response.statusText);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default addNewAppointment;
