import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getFreeTime from './thunk';

interface IInitialState {
  loading: boolean,
  time: Date[],
  error: string,
}
const initialState: IInitialState = {
  loading: false,
  time: [],
  error: '',
};

const freeTimeSlice = createSlice({
  name: 'freeTime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFreeTime.pending.type, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getFreeTime.fulfilled.type, (state, action: PayloadAction<Date[]>) => {
        state.loading = false;
        state.time = action.payload;
      })
      .addCase(getFreeTime.rejected.type, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.time = [];
        state.error = action.payload;
      });
  },
});

export default freeTimeSlice.reducer;
