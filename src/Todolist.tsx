import {Button} from "./Button";
import {FilterTasksType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsTodoType = {
    title: string
    task: TaskType[]
    removeTask: (taskId: string) => void
    changeTask: (filter: FilterTasksType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filterValue: FilterTasksType
}
export type TaskType = {
    id: string
    isDone: boolean
    title: string
}
export const Todolist = ({title, task, removeTask, changeTask, addTask, changeTaskStatus, filterValue}: PropsTodoType) => {
    const [inputText, setInputText] = useState<string>("")
    const [error, setError] = useState<null | string>(null)
    const addTaskHandler = () => {
        if (inputText.trim() === ""){
            setError('title is required')
            setInputText('')
            return
        }
        addTask(inputText.trim())
        setInputText('')
    }
    const addTaskKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
        setError(null)
    }
    const changeFilterTasksHandler = (filter: FilterTasksType) => {
        changeTask(filter)
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={inputText}
                    onKeyUp={addTaskKeyUpHandler}
                    onChange={onChangeInputHandler}
                />
                <Button
                    title={'+'}
                    onClick={addTaskHandler}
                />
            </div>
            {error && <div className={"error-message"}>{error}</div>}
            {task.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {task.map(el => {
                        const removeTaskHandler = () => {
                            removeTask(el.id)
                        }
                        const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(el.id ,e.currentTarget.checked)
                        }
                        return (
                            <li key={el.id}>
                                <input
                                    type="checkbox"
                                    checked={el.isDone}
                                    onChange={changeTaskStatusHandler}
                                />
                                <span>{el.title}</span>
                                <Button
                                    title={'X'}
                                    onClick={removeTaskHandler}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    className={filterValue === "all" ? "active-filter" : ""}
                    title={'All'}
                    onClick={() => changeFilterTasksHandler('all')}/>
                <Button
                    className={filterValue === "active" ? "active-filter" : ""}
                    title={'Active'}
                    onClick={() => changeFilterTasksHandler('active')}/>
                <Button
                    className={filterValue === "complete" ? "active-filter" : ""}
                    title={'Completed'}
                    onClick={() => changeFilterTasksHandler('complete')}/>
            </div>
        </div>
    );
};

