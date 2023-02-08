import {ADD_TASK} from "../types";

export const handelAddingTasks = (payload) => (dispatch) => ({type: ADD_TASK, payload})