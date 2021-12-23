import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import registration from './thunk';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    status: '',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled.type, (state, action: PayloadAction<string>) => {
        state.status = action.payload;
      })
      .addCase(registration.rejected.type, (state, action: PayloadAction<string>) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});
export default registrationSlice.reducer;
