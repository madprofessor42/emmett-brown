import styles from "./Tasks.module.css"
import TaskText from "./TaskText/TaskText";
import DeleteButton from "./DeleteButton/DeleteButton";

const Tasks = ({task}) => {

    return (
        <div className={styles.container}>
            <TaskText task={task}/>
            <DeleteButton/>
        </div>
    )

}

export default Tasks;