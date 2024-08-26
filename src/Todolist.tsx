

type PropsTodoType = {
    title: string
    task: TaskPropsType[]
}
export type TaskPropsType = {
    id: number
    isDone: boolean
    title: string
}
export const Todolist = ({title, task}: PropsTodoType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input
                        type="checkbox"
                        checked={task[0].isDone}
                    />
                    <span>{task[0].title}</span>
                </li>
                <li>
                    <input
                        type="checkbox"
                        checked={task[1].isDone}
                    />
                    <span>{task[1].title}</span>
                </li>
                <li>
                    <input
                        type="checkbox"
                        checked={task[2].isDone}
                    />
                    <span>{task[2].title}</span>
                </li>

            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

