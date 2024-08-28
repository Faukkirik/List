import {Button} from "./Button";
import {FilterTasksType} from "./App";

type PropsTodoType = {
    title: string
    task: TaskType[]
    removeTask: (taskId: number) => void
    changeTask: (filter: FilterTasksType) => void
}
export type TaskType = {
    id: number
    isDone: boolean
    title: string
}
export const Todolist = ({title, task, removeTask, changeTask}: PropsTodoType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {task.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {task.map(el => {
                        return (
                            <li key={el.id}>
                                <input
                                    type="checkbox"
                                    checked={el.isDone}
                                />
                                <span>{el.title}</span>
                                <Button
                                    title={'X'}
                                    onClick={() => {
                                        removeTask(el.id)
                                    }}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button
                    title={'All'}
                    onClick={() => {
                        changeTask("all")
                    }}/>
                <Button
                    title={'Active'}
                    onClick={() => {
                        changeTask("active")
                    }}/>
                <Button
                    title={'Completed'}
                    onClick={() => {
                        changeTask("complete")
                    }}/>
            </div>
        </div>
    );
};

