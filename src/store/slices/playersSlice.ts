import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Player {
  id: string;
  name: string;
  count: number;
}

interface PlayersState {
  list: Player[];
  winner: string | null;
}

const initialState: PlayersState = {
  list: [],
  winner: null
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Omit<Player, 'count'>>) => {
      state.list.push({
        ...action.payload,
        count: 0
      });
    },
    removePlayer: (state, action: PayloadAction<string>) => {
        state.list = state.list.filter(player => player.id !== action.payload);
      },
    incrementCount: (state, action: PayloadAction<string>) => {
      const player = state.list.find(p => p.id === action.payload);
      if (player) {
        player.count++;

        if (player.count >= 10) {
          state.winner = player.name;
          state.list.forEach(p => p.count = 0);
        }
      }
    },
    decrementCount: (state, action: PayloadAction<string>) => {
        const player = state.list.find(p => p.id === action.payload);
        if (player) {
            if (player.count === 0) return;
            player.count--;
        }
      },
    resetGame: (state) => {
      state.winner = null;
      state.list.forEach(p => p.count = 0);
    }
  }
});

export const { addPlayer, removePlayer, incrementCount, decrementCount, resetGame } = playersSlice.actions;
export default playersSlice.reducer;
export const selectPlayerById = (id: string) => 
  (state: RootState) => state.players.list.find(p => p.id === id);
export const playersSelector = (state: RootState) => state.players.list;