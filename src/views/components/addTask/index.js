import './style.scss'
import {useDispatch} from "react-redux";
import {handelAddingTasks} from "../../../store/actions";
import {useState} from "react";

export const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const getTask = (e) =>{
        setTask(e.target.value)
    }

    const saveTask = () =>{
        dispatch(handelAddingTasks(task))
    }

    return (
    <div className={'adding-wrapper'}>
        <input type="text" className={'adding-field'} value={task} onChange={getTask}/>
        <button className={'btn-add-task'} onClick={saveTask}>Add</button>
    </div>
    )
}