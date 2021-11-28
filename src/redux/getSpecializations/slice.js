import { createSlice } from '@reduxjs/toolkit';
import { getSpecializations } from './thunk';

const specializationsSlice = createSlice({
  name: 'getSpecializations',
  initialState: {
    loading: false,
    specializations: [],
    error: '',
  },

  extraReducers: {
    [getSpecializations.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getSpecializations.fulfilled]: (state, action) => {
      state.loading = false;
      state.specializations = action.payload;
    },
    [getSpecializations.rejected]: (state, action) => {
      state.loading = false;
      state.specializations = [];
      state.error = action.error.message;
    },
  },
});

export default specializationsSlice.reducer;
