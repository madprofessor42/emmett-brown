import styles from './AddButton.module.css'


const AddButton = ({handleAddTask}) => {

    return (
        <div>
            <button className={styles.addButton} onClick={handleAddTask}>Add</button>
        </div>
    )

}

export default AddButton;
