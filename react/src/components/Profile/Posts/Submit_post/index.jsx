import styles from './Submit_post.module.css'


const Submit_post = () => {
    return (
        <div className={styles.post_actions}>
            <div className={styles.post_input}>
                <input type="text" placeholder="What do you have in mind?"/>
            </div>
            <div className={styles.submit_post}>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Submit_post;


