import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resolution } from 'types/resolutions';
import { loadResolutions } from './loadResolutions.thunk';

interface IInitialState {
  loading: boolean,
  resolutions: Resolution<Date>[] | [],
  error: string,
}
const initialState: IInitialState = {
  loading: false,
  resolutions: [],
  error: '',
};
const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadResolutions.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        loadResolutions.fulfilled.type,
        (state, action: PayloadAction<Resolution<Date>[]>) => {
          state.loading = false;
          state.resolutions = action.payload;
        },
      )
      .addCase(loadResolutions.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.resolutions = [];
        state.error = action.payload;
      });
  },
});

export default resolutionsSlice.reducer;
