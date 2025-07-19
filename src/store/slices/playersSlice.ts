import { createSlice } from '@reduxjs/toolkit'

type Player = {
    name: string,
}

const initialState = {
    players: [] as Player[]
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer(state, action) {
            state.players.push({ name: action.payload });
        },
        removePlayer(state, action) {
            state.players = state.players.filter(player => player.name !== action.payload);
        }
    },
})

export const { addPlayer, removePlayer } = playersSlice.actions;
export default playersSlice.reducer;