import {ADD_TASK, DELETE_TASK} from "../types";

export const handelAddingTask = (payload) => (dispatch) => dispatch({type: ADD_TASK, payload})
export const handelDeletingTask = (payload) => (dispatch) => dispatch({type: DELETE_TASK, payload})