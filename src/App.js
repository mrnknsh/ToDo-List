import './App.css';
import {CheckList} from "./views/components/checkList";
import {AddTask} from "./views/components/addTask";
import {store} from './store'
import {Provider} from "react-redux";
import {useEffect, useState} from "react";

function App() {
    // let [editElement, setEditElement] = useState('')
    //
    // useEffect(() => {
    //     console.log(editElement)
    // }, [editElement])
    //
    // const getElemToEdit = (elem) =>{
    //     setEditElement(elem)
    // }

    return (
        <Provider store={store}>
            <div className="App">
                <h1>SMART TODO</h1>
                <AddTask/>
                <CheckList/>
            </div>
        </Provider>
    );
}

export default App;
