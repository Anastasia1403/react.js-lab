import { Appointment } from 'types/appointments';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadAppointments } from './loadAppointments.thunk';
import { createAppointment } from './createAppointment.thunk';

interface IInitialState {
  loading: boolean,
  appointments: Appointment[] | [],
  error: string,
  creationStatus: string,
  creationError: string,
}
const initialState: IInitialState = {
  loading: false,
  appointments: [],
  error: '',
  creationStatus: '',
  creationError: '',

};
const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    nullifyCreateStatus(state) {
      state.creationStatus = '';
      state.creationError = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAppointments.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        loadAppointments.fulfilled.type,
        (state, action: PayloadAction<Appointment[]>) => {
          state.loading = false;
          state.appointments = action.payload;
          state.error = '';
        },
      )
      .addCase(loadAppointments.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.appointments = [];
        state.error = action.payload;
      })
      .addCase(createAppointment.fulfilled.type, (state, action: PayloadAction<string>) => {
        // eslint-disable-next-line
         debugger

        state.creationStatus = action.payload;
        state.creationError = '';
      })
      .addCase(createAppointment.rejected.type, (state, action: PayloadAction<any>) => {
        state.creationStatus = '';
        state.creationError = action.payload;
      });
  },
});

export const { nullifyCreateStatus } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
