import {combineReducers} from 'redux'
import gamesDataSlice from "../features/gameDataSlice";


const rootReducer = combineReducers({
    gamesData: gamesDataSlice,

})


export default rootReducer