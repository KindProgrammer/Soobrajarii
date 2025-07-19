// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

type Player = {
    name: string,
}

// const initialState: Player[] = [];
const initialState = {
    players: [] as Player[]
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        addPlayer(state, action) {

        console.log(state.players)
        console.log(action.payload)
        
        state.players.push({ name: action.payload });
        },
        removePlayer(state, action) {
            state.players = state.players.filter(player => player.name !== action.payload);
        }
    },
})

export const { addPlayer, removePlayer } = playersSlice.actions;
export default playersSlice.reducer;