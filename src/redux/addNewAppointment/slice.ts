import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import addNewAppointment from './thunk';

// interface IInitialState {
//   loading: boolean,
//   status: string,
//   error: string,
// };
const initialState = {
  loading: false,
  status: '',
  error: '',
};

const newAppointmentSlice = createSlice({
  name: 'newAppointment',
  initialState,
  reducers: {
    nullifyStatus(state) {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewAppointment.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addNewAppointment.fulfilled.type, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.status = action.payload;
      })
      .addCase(addNewAppointment.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.status = '';
        state.error = action.payload;
      });
  },
});
export const { nullifyStatus } = newAppointmentSlice.actions;
export default newAppointmentSlice.reducer;
