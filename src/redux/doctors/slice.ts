import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import loadDoctorsName from './loadDoctorsName.thunk';
import loadFreeTime from './loadFreeTime.thunk';
import { loadSpecializations } from './loadSpecializations.thunk';

export interface ISpecialization {
  specialization_name: string,
  id: string
}
export interface IDoctor {
  first_name: string,
  last_name: string,
  id: string
}

interface IInitialState {
  specializations: ISpecialization[],
  doctorsName: IDoctor[],
  time: Date[],
  error: string,
}

const initialState: IInitialState = {
  specializations: [],
  doctorsName: [],
  time: [],
  error: '',
};
const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loadSpecializations.fulfilled.type,
        (state, action: PayloadAction<ISpecialization[]>) => {
          state.specializations = action.payload;
        },
      )
      .addCase(loadSpecializations.rejected.type, (state, action: PayloadAction<any>) => {
        state.specializations = [];
        state.error = action.payload;
      })
      .addCase(loadDoctorsName.fulfilled.type, (state, action: PayloadAction<IDoctor[]>) => {
        state.doctorsName = action.payload;
      })
      .addCase(loadDoctorsName.rejected.type, (state, action: PayloadAction<any>) => {
        state.doctorsName = [];
        state.error = action.payload;
      })
      .addCase(loadFreeTime.fulfilled.type, (state, action: PayloadAction<Date[]>) => {
        state.time = action.payload;
      })
      .addCase(loadFreeTime.rejected.type, (state, action: PayloadAction<any>) => {
        state.time = [];
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
