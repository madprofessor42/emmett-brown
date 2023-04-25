import styles from './TaskInput.module.css'
import {useState} from "react";


const TaskInput = ({text, setText}) => {


    return (
        <div>
            <input type="text" className={styles.input} value={text} onChange={(event) => setText(event.target.value)}/>
        </div>
    )

}

export default TaskInput;

