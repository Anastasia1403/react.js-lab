import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../api/url';

export const registration = createAsyncThunk(
  'auth/registration',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await instance.post('/auth/registration', userData);
      return response.statusTest;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    status: '',
    error: '',
  },
  extraReducers: {

    [registration.fulfilled]: (state, action) => {
      state.status = action.payload;
    },
    [registration.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },

  },
});

export default registrationSlice.reducer;
