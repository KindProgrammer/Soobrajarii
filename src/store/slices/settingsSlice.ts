import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { type PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
    victoryPoints: number;
}

const initialState: SettingsState = {
    victoryPoints: 10,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setVictoryPoints: (state, action: PayloadAction<number>) => {
            if (action.payload <= 1) {
                state.victoryPoints = 1;
            } else if (action.payload >= 50) {
                state.victoryPoints = 50;
            } else {
                state.victoryPoints = action.payload;
            }
        }
    }
});

export const { setVictoryPoints } = settingsSlice.actions;
export const victoryPointsSelector = (state: RootState) => state.settings.victoryPoints;
export default settingsSlice.reducer;