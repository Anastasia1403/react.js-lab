import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import login from './thunk';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    error: '',
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled.type, (state) => {
        state.error = '';
        state.isLoggedIn = true;
      })
      .addCase(login.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      });
  },
});

export default loginSlice.reducer;
