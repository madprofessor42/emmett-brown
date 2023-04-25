import styles from "./Tasks.module.css"
import TaskText from "./TaskText/TaskText";
import DeleteButton from "./DeleteButton/DeleteButton";

const Tasks = () => {
    return (
        <div>
            <TaskText/>
            <DeleteButton/>
        </div>
    )

}

export default Tasks;