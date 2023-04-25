import styles from './TaskPage.module.css'
import TaskBar from "../components/TaskBar/TaskBar";
import Tasks from "../components/Tasks/Tasks";


const TaskPage = () => {

    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <span>Todo List using React</span>
                </div>
                <div className={styles.tasksContainer}>
                    <TaskBar/>
                    <Tasks/>
                </div>
            </div>
        </>
    )

}

export default TaskPage;

