import './App.css';
import {CheckList} from "./views/components/checkList";
import {AddTask} from "./views/components/addTask";

function App() {
    return (
        <div className="App">
            <h1>SMART TODO</h1>
            <AddTask/>
            <CheckList/>
        </div>
    );
}

export default App;
