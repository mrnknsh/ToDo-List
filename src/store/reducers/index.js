import {ADD_TASK} from "../types";

const initialState = {
    tasks: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let tasksList = state.tasks.concat(action.payload)
            return {...state, tasks: tasksList}

        default:
            return state
    }
}