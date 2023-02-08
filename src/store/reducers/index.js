import {ADD_TASK} from "../types";

const initialState = {
    tasks: null
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:{
            return {...state, tasks: action.payload}
        }
        default: return state
    }
}