import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSpecializations } from './thunk';

export interface ISpecialization {
  specialization_name: string,
  id: string
}
interface IInitialState {
  loading: boolean,
  specializations: ISpecialization[] | [],
  error: string,
}

const initialState: IInitialState = {
  loading: false,
  specializations: [],
  error: '',
};

const specializationsSlice = createSlice({
  name: 'specializations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpecializations.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getSpecializations.fulfilled.type,
        (state, action: PayloadAction<ISpecialization[]>) => {
          state.loading = false;
          state.specializations = action.payload;
        },
      )
      .addCase(getSpecializations.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.specializations = [];
        state.error = action.payload;
      });
  },
});

export default specializationsSlice.reducer;
