import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppointmentForPatient } from 'types/appointments';
import getAppointments from './thunk';

interface IInitialState {
  loading: boolean,
  appointments: IAppointmentForPatient[] | [],
  error: string,
}
const initialState: IInitialState = {
  loading: false,
  appointments: [],
  error: '',
};
const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAppointments.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getAppointments.fulfilled.type,
        (state, action: PayloadAction<IAppointmentForPatient[]>) => {
          state.loading = false;
          state.appointments = action.payload;
        },
      )
      .addCase(getAppointments.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.appointments = [];
        state.error = action.payload;
      });
  },
});

export default appointmentsSlice.reducer;
