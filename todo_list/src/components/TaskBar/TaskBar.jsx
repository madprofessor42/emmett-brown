import TaskInput from "./TaskInput/TaskInput";
import AddButton from "./AddButton/AddButton";
import styles from "./TaskBar.module.css"

const TaskBar = ({text, setText, handleAddTask}) => {


    return (
        <div className={styles.userForm}>
            <TaskInput text={text} setText={setText}/>
            <AddButton handleAddTask={handleAddTask}/>
        </div>

    )
}

export default TaskBar;