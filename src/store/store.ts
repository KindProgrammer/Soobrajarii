import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './slices/playersSlice';
import modalReduser from './slices/modalSlice';

export const store = configureStore({
    reducer: {
      players: playersReducer,
      modal: modalReduser,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;