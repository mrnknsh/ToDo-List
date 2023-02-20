import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {handelDeletingTask, handelDoneTask} from "../../../store/actions";
import {reduxTodoList} from "../../../store/selectors";

export const CheckList = () => {
    const todoItems = reduxTodoList()
    const dispatch = useDispatch()

    const deleteTask = (e) =>{
        const deletingElement = e.currentTarget.getAttribute('data-delete-id')
        dispatch(handelDeletingTask(+deletingElement))
    }

    // const elemToEdit = (e) =>{
    //     const editingElem = e.currentTarget.getAttribute('data-edit-id')
    //     getElemToEdit(todoItems.find(elem => elem.id === +editingElem).task)
    // }

    const CrossOutTask = (e) =>{
        const doneElem = e.currentTarget.getAttribute('data-done-id')
        dispatch(handelDoneTask(+doneElem))
    }


    return (
        <div className={'checkList-wrapper'}>
            <h2>ToDo List</h2>
            <div className={'checkList-elements'}>
                {todoItems.map(elem => {
                    return (
                        <div className={elem.done ? 'checkList-item cross-out-task' : 'checkList-item'} key={elem.id}>
                            <p className={'checkList-task'} data-done-id={elem.id} onClick={CrossOutTask}>{elem.task}</p>
                            <p className={'checkList-edit'} data-edit-id={elem.id}><FontAwesomeIcon icon={faPenToSquare}/></p>
                            <p className={'checkList-delete'} data-delete-id={elem.id} onClick={deleteTask}><FontAwesomeIcon icon={faTrashCan}/></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}