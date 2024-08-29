import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {useState} from "react";
import {v1} from "uuid";

export type FilterTasksType = "all" | "active" | "complete"

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), isDone: true, title: "HTML"},
        {id: v1(), isDone: true, title: "CSS"},
        {id: v1(), isDone: false, title: "JS/TS"},
    ])
    const [filter, setFilter] = useState<FilterTasksType>("all")
    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }
    const changeTask = (filter: FilterTasksType) => {
        setFilter(filter)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let newTasks = tasks.map(el => el.id === taskId ? {...el, isDone: isDone} : el)
        setTasks(newTasks)
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
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filterValue={filter}
            />
        </div>
    );
}

export default App;
