import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from '../../api/url';

const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      return await instance.post(url.login, userData)
        .then((response) => {
          localStorage.setItem('tokenData', JSON.stringify(response.data));
          return (response.statusText);
        });
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export default login;
