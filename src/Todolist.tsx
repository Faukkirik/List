import {Button} from "./Button";

type PropsTodoType = {
    title: string
    task: TaskType[]
    removeTask: (taskId: number) => void
}
export type TaskType = {
    id: number
    isDone: boolean
    title: string
}
export const Todolist = ({title, task, removeTask}: PropsTodoType) => {
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
                                    onClick={()=>{ removeTask(el.id) }}/>
                            </li>
                        )
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};

