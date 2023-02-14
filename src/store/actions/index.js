import {ADD_TASK} from "../types";

export const handelAddingTasks = (payload) => (dispatch) => dispatch({type: ADD_TASK, payload})