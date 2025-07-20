import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './slices/playersSlice';
import modalReduser from './slices/modalSlice';
import letterReduser from './slices/letterSlice';
import questionReduser from './slices/questionSlice';

export const store = configureStore({
    reducer: {
      players: playersReducer,
      modal: modalReduser,
      letter: letterReduser,
      question: questionReduser,
    },
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;