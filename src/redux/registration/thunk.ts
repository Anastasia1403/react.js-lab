import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { hideNotification, showNotification } from 'redux/showNotification/slice';

export interface IUser {
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
}
const registration = createAsyncThunk(
  'auth/registration',
  async (userData: IUser, thunkAPI) => {
    try {
      return await instance.post(url.registration, userData)
        .then((response): string => {
          thunkAPI.dispatch(showNotification({ type: 'success', text: 'You are successfully registered', isVisible: true }));
          setTimeout(() => {
            thunkAPI.dispatch(hideNotification());
          }, 5000);
          return response.statusText;
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

export default registration;
