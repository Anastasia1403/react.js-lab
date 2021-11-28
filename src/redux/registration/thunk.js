import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';

const registration = createAsyncThunk(
  'auth/registration',
  async (userData, { rejectWithValue }) => {
    try {
      return await instance.post(url.registration, userData)
        .then((response) => response.statusText);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default registration;
