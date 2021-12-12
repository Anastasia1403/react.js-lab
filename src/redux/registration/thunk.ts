import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'models/interfaces';
// import { AppDispatch } from '../store';
import { instance, url } from 'api/url';
// import { registrationError, registrationSuccess } from './slice';

const registration = createAsyncThunk(
  'auth/registration',
  async (userData: IUser, thunkAPI) => {
    try {
      return await instance.post(url.registration, userData)
        .then((response): string => response.statusText);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

// const registration = async (userData: any, dispatch: AppDispatch) => {
//     try {
//       const response = await instance.post(url.registration, userData)
//       dispatch(registrationSuccess(response.statusText))
//         // .then((response): string => response.statusText);
//     } catch (error: any) {
//       dispatch(registrationError(error.response.data))
//       // return error.response.data;
//     }
//   };

export default registration;
