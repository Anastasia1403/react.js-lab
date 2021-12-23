import { createAsyncThunk } from '@reduxjs/toolkit';
import { hideNotification, showNotification } from 'redux/notifications/slice';
import { ResponseError } from 'redux/types';
import { instance, url } from 'api/url';

export interface IUserLogin {
  userName: string,
  password: string,
}

const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLogin, thunkAPI) => {
    try {
      return await instance.post(url.login(), userData)
        .then((response) => {
          localStorage.setItem('tokenData', JSON.stringify(response.data));
          return (response.statusText);
        });
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      thunkAPI.dispatch(showNotification({ type: 'error', text: result }));
      setTimeout(() => {
        thunkAPI.dispatch(hideNotification());
      }, 5000);
      return thunkAPI.rejectWithValue(result);
    }
  },
);
export default login;
