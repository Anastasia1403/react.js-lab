import { RootState } from 'redux/store';

export const type = (state: RootState) => state.notification.type;
export const text = (state: RootState) => state.notification.text;
export const isVisible = (state: RootState) => state.notification.isVisible;
