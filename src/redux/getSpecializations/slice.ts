import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecialization } from '../../models/interfaces';
import { getSpecializations } from './thunk';

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
  name: 'getSpecializations',
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
