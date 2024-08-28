import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";

export type FilterTasksType = "all" | "active" | "complete"

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: true, title: "HTML"},
        {id: 2, isDone: true, title: "CSS"},
        {id: 3, isDone: false, title: "JS/TS"},
    ])
    const [filter, setFilter] = useState<FilterTasksType>("all")
    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }
    const changeTask = (filter: FilterTasksType) => {
        setFilter(filter)
    }
    let tasksForTodolist = tasks
    if (filter === "active") {
        tasksForTodolist = tasks.filter(el => el.isDone)
    }
    if (filter === "complete") {
        tasksForTodolist = tasks.filter(el => !el.isDone)
    }
    return (
        <div className="App">
            <Todolist
                title="What to lern"
                task={tasksForTodolist}
                removeTask={removeTask}
                changeTask={changeTask}
            />
        </div>
    );
}

export default App;
