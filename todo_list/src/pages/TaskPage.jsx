import styles from './TaskPage.module.css'
import TaskBar from "../components/TaskBar/TaskBar";
import Tasks from "../components/Tasks/Tasks";
import {useState} from "react";


const TaskPage = () => {
    // Нельзя весь код проксировать через один и тот же хук, так как например useProducts импортированный в одном компоненте не будет шарить свои данные в другом.
    // Для этого нужно вынести его выше по иерархии - Задаем все нужные стейты в этом компоненты и прокидываем как пропсы

    // Можно задавать стейты и для каждого компонента в отдельности, но тогда этот стейт должен быть применим только к этому компоненту, и не должен быть передан в другой
    // исключения составляет если в этот компонент вложен другой компонент - тогда мы можем передать состояние


    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        setTasks(prev => [...prev, text])
        setText("");
    }


    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <span>Todo List using React</span>
                </div>
                <div className={styles.tasksContainer}>
                    <TaskBar text={text} setText={setText} handleAddTask={handleAddTask}/>
                    <div className={styles.taskItemContainer}>
                        {tasks.map(task => <Tasks task={task}/>)}
                    </div>

                </div>
            </div>
        </>
    )

}

export default TaskPage;

