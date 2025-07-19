import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './slices/playersSlice';

export const store = configureStore({
    reducer: {
      players: playersReducer,
    },
  });

export type RootState = ReturnType<typeof store.getState>; // Тип глобального состояния
export type AppDispatch = typeof store.dispatch; // Тип dispatch