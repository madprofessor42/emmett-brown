import styles from "./DeleteButton.module.css"

const DeleteButton = ({handleDeleteTask}) => {

    return (
        <div>
            <button className={styles.deleteButton} onClick={handleDeleteTask}>Delete</button>
        </div>
    )
}

export default DeleteButton;