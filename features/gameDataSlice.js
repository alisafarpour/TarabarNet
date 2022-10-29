import {createSlice} from "@reduxjs/toolkit";
import {GAMES_DETAILS} from "../data/games-details";

const initialState = {
    gamesDataInHomeScreen: GAMES_DETAILS,
    deletedGames: [],
    selectGameData: [],
}

export const gamesDataSlice = createSlice({
    name: "gamesData",
    initialState,
    reducers: {

        deleteGames(state, action) {
            state.gamesDataInHomeScreen = action.payload
        },

        setDeletedGames(state, action) {
            state.deletedGames.push(action.payload)
        },

        refreshData(state) {
            state.gamesDataInHomeScreen = [...state.gamesDataInHomeScreen, ...state.deletedGames]
            state.deletedGames = []
        },

        setSelectedCardData(state, action) {
            state.selectGameData =  action.payload
        },
    }
})

export const selectGamesData = state => state.gamesData

export const {deleteGames, setDeletedGames, refreshData, setSelectedCardData} = gamesDataSlice.actions
export default gamesDataSlice.reducer