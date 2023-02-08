import {useSelector} from "react-redux";

export const reduxTodoList = () => useSelector(state => state.todoList.tasks )