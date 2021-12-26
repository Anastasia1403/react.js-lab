import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, url } from 'api/url';
import { ResponseError } from 'redux/types';

interface Props {
  doctorId: string,
  date: string
}
const loadFreeTime = createAsyncThunk(
  'doctors/loadFreeTime',
  async ({ doctorId, date }: Props, { rejectWithValue }) => {
    try {
      return await instance.get<string[]>(
        url.appointmentFreeTime(),
        { params: { date, doctorID: doctorId } },
      )
        .then((response) => response.data);
    } catch (error: any) {
      const result = (error as ResponseError).response.data;
      return rejectWithValue(result);
    }
  },
);

export default loadFreeTime;
