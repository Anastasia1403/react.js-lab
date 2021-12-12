import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/url';

interface Props {
  doctorId: string,
  date: string
}
const getFreeTime = createAsyncThunk(
  'getFreeTime',
  async ({ doctorId, date }: Props, { rejectWithValue }) => {
    try {
      return await instance.get<string[]>(`/appointments/time/free?date=${date}&doctorID=${doctorId}`)
        .then((response) => response.data);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default getFreeTime;
