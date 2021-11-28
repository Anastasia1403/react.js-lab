import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/url';

const getDoctors = createAsyncThunk(
  'doctors/getDoctors',
  (specId, { rejectWithValue }) => {
    try {
      return instance.get(`/doctors/specialization/${specId}`)
        .then((response) => (
          response.data
        ));
    //   return api.getDoctors(specId);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getDoctors;
