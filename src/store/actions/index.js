import {ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK} from "../types";

export const handelAddingTask = (payload) => (dispatch) => dispatch({type: ADD_TASK, payload})
export const handelDeletingTask = (payload) => (dispatch) => dispatch({type: DELETE_TASK, payload})
export const handelDoneTask = (payload) => (dispatch) => dispatch({type: DONE_TASK, payload})
export const handelEditingTask = (payload1, payload2) => (dispatch) => dispatch({type: EDIT_TASK, payload1, payload2})