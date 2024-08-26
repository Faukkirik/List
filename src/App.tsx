import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const task1: Array<TaskType> = [
        {id: 1, isDone: true, title: "HTML"},
        {id: 2, isDone: true, title: "CSS"},
        {id: 3, isDone: false, title: "JS/TS"},
    ]
    const task2: Array<TaskType> = [
        {id: 1, isDone: false, title: "Beer"},
        {id: 2, isDone: true, title: "Break"},
        {id: 3, isDone: false, title: "Beast"},
    ]

    return (
        <div className="App">
            <Todolist
                title="What to lern"
                task={task1}/>
            <Todolist
                title="Songs"
                task={task2}/>
        </div>
    );
}

export default App;
