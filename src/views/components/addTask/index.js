import './style.scss'
import {useDispatch} from "react-redux";
import {handelAddingTask} from "../../../store/actions";
import {useEffect, useState, useRef} from "react";

export const AddTask = ({useEditElem}) => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    // const inputElement = useRef()

    const getTask = (e) => {
        setTask(e.target.value)
    }

    const saveTaskByEnter = (e) => {
        if(e.key === 'Enter'){
            saveTask()
        }
    }

    const saveTask = () => {
        if (task) {
            dispatch(handelAddingTask(task))
            setTask('')
        }
    }

    // useEffect(()=>{
    //     inputElement.current.value = useEditElem;
    //     console.log(useEditElem)
    // }, [useEditElem])

    return (
        <div className={'adding-wrapper'}>
            <input type="text" className={'adding-field'} value={task} onChange={getTask} onKeyDown={saveTaskByEnter}/>
            <button className={'btn-add-task'} onClick={saveTask}>Add</button>
        </div>
    )
}