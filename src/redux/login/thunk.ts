import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserLogin } from 'models/interfaces';
import { instance, url } from '../../api/url';

const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLogin, { rejectWithValue }) => {
    try {
      return await instance.post(url.login, userData)
        .then((response) => {
          localStorage.setItem('tokenData', JSON.stringify(response.data));
          return (response.statusText);
        });
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
export default login;
