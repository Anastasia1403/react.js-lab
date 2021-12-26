import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { ResponseError } from 'redux/types';
import { IDoctor } from './slice';

const loadDoctorsName = createAsyncThunk(
  'doctors/loadDoctorsName',
  (specId: string, { rejectWithValue }) => {
    try {
      return instance.get<IDoctor[]>(url.getDoctorsBySpecialization(specId))
        .then((response) => (
          response.data
        ));
    } catch (error: any) {
      const result = (error as ResponseError).response.data;

      return rejectWithValue(result);
    }
  },
);

export default loadDoctorsName;
