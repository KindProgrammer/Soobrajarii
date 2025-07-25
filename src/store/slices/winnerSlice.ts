import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface WinnerState {
    winner: string | null;
  }

const initialState: WinnerState = {
    winner: null
  }

const winnerSlice = createSlice({
    name: 'winner',
    initialState,
    reducers: {
        setWinner: (state, action: PayloadAction<string>) => {
            state.winner = action.payload;
        },
        resetWinner: (state) => {
            state.winner = null;
          },
    }
})

export const { setWinner, resetWinner } = winnerSlice.actions;
export default winnerSlice.reducer;
export const winnerSelector = (state: RootState) => state.winner.winner;