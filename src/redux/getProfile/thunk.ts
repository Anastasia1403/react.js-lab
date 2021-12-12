import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserProfile } from 'models/interfaces';
import { instance, url } from '../../api/url';

import authHeader from '../helper';

const getProfile = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      return await instance.get<IUserProfile>(url.getProfile, { headers: authHeader() })
        .then((response) => response.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getProfile;
