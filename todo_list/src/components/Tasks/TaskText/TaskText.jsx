import styles from "./TaskText.module.css"

const TaskText = ({task}) => {

    return (
        <div className={styles.textElement}>
            <span>{task}</span>
        </div>
    )

}

export default TaskText;