import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { ResponseError } from 'redux/types';
import { ISpecialization } from './slice';

export const getSpecializations = createAsyncThunk(
  'doctors/getSpecializations',
  async (_, { rejectWithValue }) => {
    try {
      return await instance.get<ISpecialization[]>(url.getSpecializations())
        .then((response) => (
          response.data
        ));
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      return rejectWithValue(result);
    }
  },
);
export default getSpecializations;
