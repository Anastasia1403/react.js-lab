import { createAsyncThunk } from '@reduxjs/toolkit';
import { hideNotification, showNotification } from 'redux/showNotification/slice';
import { instance, url } from '../../api/url';

export interface IUserLogin {
  userName: string,
  password: string,
}

const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserLogin, thunkAPI) => {
    try {
      return await instance.post(url.login, userData)
        .then((response) => {
          localStorage.setItem('tokenData', JSON.stringify(response.data));
          return (response.statusText);
        });
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({ type: 'error', text: error.response.data, isVisible: true }));
      setTimeout(() => {
        thunkAPI.dispatch(hideNotification());
      }, 5000);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export default login;
