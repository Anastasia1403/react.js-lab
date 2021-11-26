import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

export const getSpec = createAsyncThunk(
  'doctors/specializations',
  () => {
    try {
      return api.getSpec();
    } catch (error) {
      return error;
    }
  },
);

const getSpecSlice = createSlice({
  name: 'getDoctors',
  initialState: {
    loading: false,
    specializations: [],
    error: '',
  },

  extraReducers: {
    [getSpec.pending]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [getSpec.fulfilled]: (state, action) => {
      state.loading = false;
      state.specializations = action.payload;
    },
    [getSpec.rejected]: (state, action) => {
      state.loading = false;
      state.specializations = [];
      state.error = action.error.message;
    },
  },
});

export default getSpecSlice.reducer;
