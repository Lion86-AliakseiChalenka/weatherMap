import reducer from "./reducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import { reducer as formReducer } from 'redux-form';
import thunk from "redux-thunk";

const combinedReducer = combineReducers(
    {
        reducer,
        form: formReducer
    })

const store = createStore(combinedReducer, applyMiddleware(thunk))
window.store=store

export default store