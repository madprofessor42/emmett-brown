import styles from './Submited_posts.module.css'

const Submited_posts = () => {
    return (
        <div className={styles.postFeed}>
            <div className={styles.item}>
                <div className={styles.image}>
                    <span>Some Image</span>
                </div>
                <div className={styles.text}>
                    <span>Submitted PdsasPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostPdsasasasaostvasasaost</span>
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