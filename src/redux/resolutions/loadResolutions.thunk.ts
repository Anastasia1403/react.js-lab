import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from 'redux/helper';
import { ResponseError } from 'redux/types';
import { IResolutionForDoctor, IResolutionForPatient } from 'types/resolutions';
import { Role } from 'types/role';

interface ResponsePatient {
  resolutions: IResolutionForPatient<Date>[],
  total: number
}

interface ResponseDoctor {
  resolutions: IResolutionForDoctor<Date>[],
  total: number
}

export const loadResolutions = createAsyncThunk(
  'resolutions/load',
  async (role: Role, thunkAPI) => {
    try {
      if (role === 'Doctor') {
        return await instance.get<ResponseDoctor>(
          url.resolutionForDoctor(),
          {
            headers: authHeader(),
            params: { offset: 0, limit: 20 },
          },
        )
          .then((response: any) => (
            response.data.resolutions
          ));
      }
      if (role === 'Patient') {
        return await instance.get<ResponsePatient>(
          url.resolutionForPatient(),
          {
            headers: authHeader(),
            params: { offset: 0, limit: 20 },
          },
        )
          .then((response: any) => (
            response.data.resolutions
          ));
      } return null;
    } catch (error: any) {
      const result = error.response ? (error as ResponseError).response.data : error.message;
      return thunkAPI.rejectWithValue(result);
    }
  },
);
