import styles from "./TaskText.module.css"

const TaskText = ({task}) => {

    return (
        <div>
            <span>{task}</span>
        </div>
    )

}

export default TaskText;