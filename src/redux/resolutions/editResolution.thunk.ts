import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { loadAppointments } from 'redux/appointments/loadAppointments.thunk';
import authHeader from 'redux/helper';
import { hideNotification, showNotification } from 'redux/notifications/slice';
import { ResponseError } from 'redux/types';
import { IChangedResolution } from 'types/resolutions';
import { Role } from 'types/role';
import { loadResolutions } from './loadResolutions.thunk';

export const editResolution = createAsyncThunk(
  'resolutions/edit',
  async ({ resolution, resolutionID }: Omit<IChangedResolution, 'appointmentID'>, thunkAPI) => {
    try {
      return await instance.patch(
        url.editResolution(resolutionID),
        { resolution },
        { headers: authHeader() },
      )
        .then((response) => {
          thunkAPI.dispatch(showNotification({ type: 'success', text: 'Resolution is updated' }));
          setTimeout(() => {
            thunkAPI.dispatch(hideNotification());
          }, 5000);
          thunkAPI.dispatch(loadResolutions(Role.Doctor));
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
