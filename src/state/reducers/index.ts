import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    repositoriesReducer: repositoriesReducer
})

export default reducers;