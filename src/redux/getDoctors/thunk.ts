import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'api/url';
import { IDoctor } from './slice';

const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  (specId: string, { rejectWithValue }) => {
    try {
      return instance.get<IDoctor[]>(`/doctors/specialization/${specId}`)
        .then((response) => (
          response.data
        ));
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getDoctors;
