import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';

export const getSpecializations = createAsyncThunk(
  'doctors/getSpecializations',
  async (rejectWithValue) => {
    try {
      return await instance.get(url.getSpecializations)
        .then((response) => (
          response.data
        ));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export default getSpecializations;
