import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getDoctors from './thunk';

export interface IDoctor {
  first_name: string,
  last_name: string,
  id: string
}

interface IInitialState {
  loading: boolean,
  doctors: IDoctor[] | [],
  error: string,
}

const initialState: IInitialState = {
  loading: false,
  doctors: [],
  error: '',
};
const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getDoctors.fulfilled.type, (state, action: PayloadAction<IDoctor[]>) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(getDoctors.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.doctors = [];
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;
