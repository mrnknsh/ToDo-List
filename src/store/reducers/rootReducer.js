import {combineReducers} from "redux";
import {todoReducer} from "./index";

export const rootReducer = combineReducers({
    todoList: todoReducer
})