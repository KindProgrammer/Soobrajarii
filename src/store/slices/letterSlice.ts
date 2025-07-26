import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { getRandomLetter } from '../../utils';

export interface LetterState {
    letter: string
  }

const initialState: LetterState = {
    letter: '?'
  }

const letterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers: {
        resetLetter: (state) => {
            state.letter = '?';
          },
        generateLetter: (state) => {
            state.letter = getRandomLetter(state.letter);
          },
    }
})

export const { resetLetter, generateLetter } = letterSlice.actions;
export default letterSlice.reducer;
export const letterSelector = (state: RootState) => state.letter.letter;

