import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISpecialization } from 'models/interfaces';
import { instance, url } from 'api/url';

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
