import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan, faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {reduxTodoList} from "../../../store/selectors";


export const CheckList = () => {
    const todoItems = reduxTodoList()

    return (
        <div className={'checkList-wrapper'}>
            <h2>ToDo List</h2>
            <div className={'checkList-elements'}>
                {todoItems.map((task, index) => {
                    return (
                        <div className={'checkList-item'} key={index}>
                            <p className={'checkList-task'}>{task}</p>
                            <p className={'checkList-edit'}><FontAwesomeIcon icon={faPenToSquare}/></p>
                            <p className={'checkList-delete'}><FontAwesomeIcon icon={faTrashCan}/></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}