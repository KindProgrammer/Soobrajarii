import { configureStore } from '@reduxjs/toolkit';
import playersReducer, { type PlayersState } from './slices/playersSlice';
import modalReduser, { type ModalState } from './slices/modalSlice';
import letterReduser, { type LetterState } from './slices/letterSlice';
import questionReduser, { type QuestionState } from './slices/questionSlice';
import winnerReduser, { type WinnerState } from './slices/winnerSlice';
import settingsReduser, { type SettingsState } from './slices/settingsSlice';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

interface RootState {
  players: PlayersState;
  modal: ModalState;
  letter: LetterState;
  question: QuestionState;
  winner: WinnerState;
  settings: SettingsState;
}

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (!serializedState) return undefined;
    
    const parsed = JSON.parse(serializedState) as Partial<RootState>;
    
    if (parsed.players && Array.isArray(parsed.players.list)) {
      return parsed as RootState;
    }
    return undefined;
  } catch (err) {
    console.warn('Не удалось загрузить состояние из localStorage', err);
    return undefined;
  }
};

export const store = configureStore({
    reducer: {
      players: playersReducer,
      modal: modalReduser,
      letter: letterReduser,
      question: questionReduser,
      winner: winnerReduser,
      settings: settingsReduser,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
    preloadedState: loadState(),
  });

export type { RootState };
export type AppDispatch = typeof store.dispatch;