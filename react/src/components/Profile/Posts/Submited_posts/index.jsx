import styles from './Submited_posts.module.css'

const Submited_posts = () => {
    return (
        <div className={styles.postFeed}>
            <div className={styles.item}>
                <div className={styles.image}>
                    Some image
                </div>
                <div className={styles.text}>
                    Submitted post
                </div>
            </div>
            <div className={styles.actions}>
                <span>like</span>
                <span>dislike</span>
            </div>
        </div>
    )
}

export default Submited_posts;