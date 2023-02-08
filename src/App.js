import './App.css';
import {CheckList} from "./views/components/checkList";
import {AddTask} from "./views/components/addTask";
import {store} from './store'
import {Provider} from "react-redux";

function App() {
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
