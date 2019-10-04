import reducer from "./reducer";
import {createStore} from "redux";

const combinedReducer = combineReducers(reducer)

const store = createStore(combinedReducer)

window.store=store

export default store