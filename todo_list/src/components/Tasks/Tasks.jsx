import styles from "./Tasks.module.css"
import TaskText from "./TaskText/TaskText";
import DeleteButton from "./DeleteButton/DeleteButton";

const Tasks = ({task, handeDeleteTask}) => {

    return (
        <div className={styles.container}>
            <TaskText task={task}/>
            <DeleteButton handleDeleteTask={handeDeleteTask}/>
        </div>
    )

}

export default Tasks;