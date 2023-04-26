import styles from './TaskPage.module.css'
import TaskBar from "../components/TaskBar/TaskBar";
import Tasks from "../components/Tasks/Tasks";
import {useEffect, useState} from "react";


const TaskPage = () => {
    // Нельзя весь код проксировать через один и тот же хук, так как например useProducts импортированный в одном компоненте не будет шарить свои данные в другом.
    // Для этого нужно вынести его выше по иерархии - Задаем все нужные стейты в этом компоненты и прокидываем как пропсы

    // Можно задавать стейты и для каждого компонента в отдельности, но тогда этот стейт должен быть применим только к этому компоненту, и не должен быть передан в другой
    // исключения составляет если в этот компонент вложен другой компонент - тогда мы можем передать состояние


    const [text, setText] = useState("");
    // Получаем таски из localStorage
    const [tasks, setTasks] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos)
        } else {
            return []
        }
    });

    const [isEditing, setIsEditing] = useState(false);


    // Добавляем таски в localStorage
    // В зависимости передаем список тасков
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(tasks))
    }, [tasks]);

    // При добавлении таски задаем ей уникальный id, с помощью которого потом будем отделать созданные таски между собой
    // Теперь у нас есть массив с объектами. Что бы получить доступ к тексту tasks[0].text - текст первой таски. tasks[0].id - айдишник первой таски
    const handleAddTask = () => {
        if (text.trim().length !== 0) {
            setTasks(prev => [...prev, {id: new Date(), text}])
            setText("");
        }
    }

    const handleDeleteTask = (taskID) => {
        const updatedTasks = tasks.filter(task => task.id !== taskID)
        setTasks(updatedTasks);
    }

    const handleEditTask = (taskID) => {

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
                        {tasks.map(task => <Tasks task={task.text} key={task.id} handeDeleteTask={() => handleDeleteTask(task.id)}/>)}
                    </div>

                </div>
            </div>
        </>
    )

}

export default TaskPage;

