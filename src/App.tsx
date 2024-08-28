import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: true, title: "HTML"},
        {id: 2, isDone: true, title: "CSS"},
        {id: 3, isDone: false, title: "JS/TS"},
    ])
const removeTask = (taskId: number) => {
    setTasks(tasks.filter(el => el.id !== taskId))
    }

    return (
        <div className="App">
            <Todolist
                title="What to lern"
                task={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
