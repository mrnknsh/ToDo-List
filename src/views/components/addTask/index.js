import './style.scss'
import {useDispatch} from "react-redux";
import {handelAddingTask} from "../../../store/actions";
import {useEffect, useState} from "react";

export const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

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

    // const editTask = () =>{
    //     getElemToEdit('')
    //     setTask('')
    // }
    //
    // useEffect(()=>{
    //     if(editElement){
    //         setTask(editElement)
    //     }
    // }, [editElement])

    return (
        <div className={'adding-wrapper'}>
            <input type="text" className={'adding-field'} value={task} onChange={getTask} onKeyDown={saveTaskByEnter}/>
            <button className={'btn-add-edit'} onClick={saveTask}>Add</button>
            {/*<button>Edit</button>*/}
        </div>
        // <div className={'adding-wrapper'}>
        //     <input type="text" className={'adding-field'} value={task} onChange={getTask} onKeyDown={saveTaskByEnter}/>
        //     <button className={editElement ? 'btn-add-edit btn-add-task' : 'btn-add-edit'} onClick={saveTask}>Add</button>
        //     <button className={editElement ? 'btn-add-edit' : 'btn-add-edit btn-edit-task'} onClick={editTask}>Edit</button>
        // </div>
    )
}