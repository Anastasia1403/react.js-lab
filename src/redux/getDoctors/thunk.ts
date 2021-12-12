import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDoctor } from 'models/interfaces';
import { instance } from '../../api/url';

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
