import {Button} from "./Button";
import {FilterTasksType} from "./App";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type PropsTodoType = {
    title: string
    task: TaskType[]
    removeTask: (taskId: string) => void
    changeTask: (filter: FilterTasksType) => void
    addTask: (title: string) => void
}
export type TaskType = {
    id: string
    isDone: boolean
    title: string
}
export const Todolist = ({title, task, removeTask, changeTask, addTask}: PropsTodoType) => {
    const [inputText, setInputText] = useState<string>("")
    const addTaskHandler = () => {
        addTask(inputText)
        setInputText('')
    }
    const addTaskKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value)
    }
    const setAllTasksHandler = () => {
        changeTask("all")
    }
    const setActiveTasksHandler = () => {
        changeTask("active")
    }
    const setCompleteTasksHandler = () => {
        changeTask("complete")
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={inputText}
                    onKeyUp={addTaskKeyUpHandler}
                    onChange={onChangeInputHandler}
                />
                <Button
                    title={'+'}
                    onClick={addTaskHandler}
                />
            </div>
            {task.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {task.map(el => {
                        const removeTaskHandler = () => {
                            removeTask(el.id)
                        }
                        return (
                            <li key={el.id}>
                                <input
                                    type="checkbox"
                                    checked={el.isDone}/>
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
                    title={'All'}
                    onClick={setAllTasksHandler}/>
                <Button
                    title={'Active'}
                    onClick={setActiveTasksHandler}/>
                <Button
                    title={'Completed'}
                    onClick={setCompleteTasksHandler}/>
            </div>
        </div>
    );
};

