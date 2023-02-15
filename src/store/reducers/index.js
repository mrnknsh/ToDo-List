import {ADD_TASK, DELETE_TASK} from "../types";

const initialState = {
    counter: 0,
    tasks: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let listAfterAdding = state.tasks.concat({task: action.payload, id: state.counter})
            return {...state, tasks: listAfterAdding, counter: state.counter + 1};
        case DELETE_TASK:
            let listAfterDeleting = state.tasks.filter(elem => elem.id !== action.payload)
            return {...state, tasks: listAfterDeleting};
        default:
            return state
    }
}