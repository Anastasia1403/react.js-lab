import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { ISpecialization } from './slice';

export const getSpecializations = createAsyncThunk(
  'doctors/getSpecializations',
  async (_, { rejectWithValue }) => {
    try {
      return await instance.get<ISpecialization[]>(url.getSpecializations)
        .then((response) => (
          response.data
        ));
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
export default getSpecializations;
