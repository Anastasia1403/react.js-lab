import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import authHeader from '../helper';
import { IUserProfile } from './slice';

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
