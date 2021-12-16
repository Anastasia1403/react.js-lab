import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppointmentForDoctor } from 'types/appointments';
import { getPatients } from './thunk';

interface IInitialState {
  loading: boolean,
  patients: IAppointmentForDoctor[] | [],
  error: string,
}

const initialState: IInitialState = {
  loading: false,
  patients: [],
  error: '',
};
const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getPatients.fulfilled.type,
        (state, action: PayloadAction<IAppointmentForDoctor[]>) => {
          state.loading = false;
          state.patients = action.payload;
        },
      )
      .addCase(getPatients.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.patients = [];
        state.error = action.payload;
      });
  },
});

export default patientsSlice.reducer;
