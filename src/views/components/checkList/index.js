import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";
import {handelDeletingTask} from "../../../store/actions";
import {reduxTodoList} from "../../../store/selectors";

export const CheckList = ({useEditElem}) => {
    const todoItems = reduxTodoList()
    const dispatch = useDispatch()

    const deleteTask = (e) =>{
        const deletingElement = e.currentTarget.getAttribute('data-delete-id')
        dispatch(handelDeletingTask(+deletingElement))
    }

    // const elemToEdit = (e) =>{
    //     const editingElem = e.currentTarget.getAttribute('data-edit-id')
    //     useEditElem = todoItems.find(elem => elem.id === +editingElem).task
    // }


    return (
        <div className={'checkList-wrapper'}>
            <h2>ToDo List</h2>
            <div className={'checkList-elements'}>
                {todoItems.map(elem => {
                    return (
                        <div className={'checkList-item'} key={elem.id}>
                            <p className={'checkList-task'}>{elem.task}</p>
                            <p className={'checkList-edit'} data-edit-id={elem.id}><FontAwesomeIcon icon={faPenToSquare}/></p>
                            <p className={'checkList-delete'} data-delete-id={elem.id} onClick={deleteTask}><FontAwesomeIcon icon={faTrashCan}/></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}