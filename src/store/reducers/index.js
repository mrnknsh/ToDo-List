import {ADD_TASK, DELETE_TASK, EDIT_TASK, DONE_TASK} from "../types";

const initialState = {
    counter: 0,
    tasks: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let listAfterAdding = [{task: action.payload, id: state.counter, done: false}, ...state.tasks]
            return {...state, tasks: listAfterAdding, counter: state.counter + 1};
        case DELETE_TASK:
            let listAfterDeleting = state.tasks.filter(elem => elem.id !== action.payload)
            return {...state, tasks: listAfterDeleting};
        case EDIT_TASK:
            let listAfterEditing = state.tasks.map(elem => {
                    if (elem.id === action.payload1) {
                        elem.task = action.payload2
                    }
                    return elem
                }
            )
            return {...state, tasks: listAfterEditing};
        case DONE_TASK:
            let listAfterChangingDoneState
            let activeElem = state.tasks.find(elem => elem.id === action.payload)
            activeElem.done = !activeElem.done
            let clearArrFromActiveElem = state.tasks.filter(elem => elem.id !== action.payload)
            if (activeElem.done) {
                listAfterChangingDoneState = clearArrFromActiveElem.concat(activeElem)
            } else {
                listAfterChangingDoneState = [activeElem, ...clearArrFromActiveElem]
            }

            // let crossOutElem = state.tasks.map(elem => {
            //         if (elem.id === action.payload) {
            //             elem.done = !elem.done
            //         }
            //         return elem
            //     }
            // )
            return {...state, tasks: listAfterChangingDoneState};
        default:
            return state
    }
}