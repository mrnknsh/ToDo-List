import './App.css';
import {CheckList} from "./views/components/checkList";
import {AddTask} from "./views/components/addTask";
import {store} from './store'
import {Provider} from "react-redux";
import {useEffect, useState} from "react";

function App() {
    let [editElement, setEditElement] = useState('')
    let [editElemId, setEditElemId] = useState(null)

    const getElemToEdit = (elem1, elem2) => {
        setEditElement(elem1)
        setEditElemId(elem2)
    }

    return (
        <Provider store={store}>
            <div className="App">
                <h1>SMART TODO</h1>
                <AddTask editElem={editElement} getElemToEdit={getElemToEdit} editElemId={editElemId}/>
                <CheckList getElemToEdit={getElemToEdit}/>
            </div>
        </Provider>
    );
}

export default App;
