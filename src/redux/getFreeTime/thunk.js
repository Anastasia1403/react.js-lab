import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/url';

const getFreeTime = createAsyncThunk(
  'getFreeTime',
  async ({ doctorId, date }, { rejectWithValue }) => {
    try {
      return await instance.get(`/appointments/time/free?date=${date}&doctorID=${doctorId}`)
        .then((response) => response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getFreeTime;
