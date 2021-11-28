import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';

import authHeader from '../helper';

const getProfile = createAsyncThunk(
  'auth/profile',
  async (rejectWithValue) => {
    try {
      return await instance.get(url.getProfile, { headers: authHeader() })
        .then((response) => response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getProfile;
