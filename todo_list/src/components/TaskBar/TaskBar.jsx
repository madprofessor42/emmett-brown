import TaskInput from "./TaskInput/TaskInput";
import AddButton from "./AddButton/AddButton";
import styles from "./TaskBar.module.css"

const TaskBar = () => {
    return (
        <div className={styles.userForm}>
            <TaskInput/>
            <AddButton/>
        </div>

    )
}

export default TaskBar;