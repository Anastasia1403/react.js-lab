import { createSlice } from '@reduxjs/toolkit';
import login from './thunk';

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
