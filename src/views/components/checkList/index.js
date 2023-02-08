import './style.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";


export const CheckList = () => {
    return (
        <div className={'checkList-wrapper'}>
            <h2>ToDo List</h2>
            <div className={'checkList-elements'}>
                <div className={'checkList-item'}>
                    <p className={'checkList-task'}>Write smth</p>
                    <p className={'checkList-edit'}><FontAwesomeIcon icon={faPenToSquare}/></p>
                    <p className={'checkList-delete'}><FontAwesomeIcon icon={faTrashCan}/></p>
                </div>
                <div className={'checkList-item'}>
                    <p className={'checkList-task'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        aspernatur cumque deserunt, dolore maxime molestias necessitatibus quidem reprehenderit.
                        Nesciunt, sint?</p>
                    <p className={'checkList-edit'}><FontAwesomeIcon icon={faPenToSquare}/></p>
                    <p className={'checkList-delete'}><FontAwesomeIcon icon={faTrashCan}/></p>
                </div>

            </div>
        </div>
    )
}