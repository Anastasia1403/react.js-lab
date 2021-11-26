import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.login(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    error: '',
  },
  extraReducers: {

    [login.fulfilled]: (state) => {
      state.error = '';
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },

  },
});

export default loginSlice.reducer;
