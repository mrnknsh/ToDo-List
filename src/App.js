import './App.css';
import {CheckList} from "./views/components/checkList";
import {AddTask} from "./views/components/addTask";
import {store} from './store'
import {Provider} from "react-redux";
import {useEffect} from "react";

function App() {
    let useEditElem;
    // useEffect(() => {
    //     console.log(useEditElem)
    // }, [useEditElem])
    return (
        <Provider store={store}>
            <div className="App">
                <h1>SMART TODO</h1>
                <AddTask useEditElem={useEditElem}/>
                <CheckList useEditElem={useEditElem}/>
            </div>
        </Provider>
    );
}

export default App;
