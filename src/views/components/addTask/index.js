import './style.scss'

export const AddTask = () => {
    return (
    <div className={'adding-wrapper'}>
        <input type="text" className={'adding-field'}/>
        <button className={'btn-add-task'}>Add</button>
    </div>
    )
}