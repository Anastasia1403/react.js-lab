import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isVisible: boolean,
  type: 'success' | 'error' | null,
  text: string | null,
}
const initialState:IInitialState = {
  isVisible: false,
  type: null,
  text: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action: PayloadAction<Omit<IInitialState, 'isVisible'>>) {
      state.isVisible = true;
      state.type = action.payload.type;
      state.text = action.payload.text;
    },
    hideNotification(state) {
      state.isVisible = false;
      state.type = null;
      state.text = null;
    },
  },

});
export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
