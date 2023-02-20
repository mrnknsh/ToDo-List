import './style.scss'
import {useDispatch} from "react-redux";
import {handelAddingTask, handelEditingTask} from "../../../store/actions";
import {useEffect, useState} from "react";

export const AddTask = ({editElem, getElemToEdit, editElemId}) => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const getTaskValue = (e) => {
        setTask(e.target.value)
    }

    const saveTaskByEnter = (e) => {
        if (e.key === 'Enter') {
            if (editElem) {
                editTask()
            } else {
                saveTask()
            }
        }
    }

    const saveTask = () => {
        if (task) {
            dispatch(handelAddingTask(task))
            setTask('')
        }
    }

    useEffect(() => {
        if (editElem) {
            setTask(editElem)
        }
    }, [editElem])

    const editTask = () => {
        getElemToEdit('', null)
        setTask('')
        dispatch(handelEditingTask(editElemId, task))
    }

    return (
        // <div className={'adding-wrapper'}>
        //     <input type="text" className={'adding-field'} value={task} onChange={getTaskValue} onKeyDown={saveTaskByEnter}/>
        //     <button className={'btn-add-edit'} onClick={saveTask}>Add</button>
        //     {/*<button>Edit</button>*/}
        // </div>
        <div className={'adding-wrapper'}>
            <input type="text" className={'adding-field'} value={task} onChange={getTaskValue}
                   onKeyDown={saveTaskByEnter}/>
            <button className={editElem ? 'btn-add-edit btn-add-task' : 'btn-add-edit'} onClick={saveTask}>Add</button>
            <button className={editElem ? 'btn-add-edit' : 'btn-add-edit btn-edit-task'} onClick={editTask}>Edit
            </button>
        </div>
    )
}