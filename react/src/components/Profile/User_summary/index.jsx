import styles from './User_summary.module.css'

const User_summary = () => {
    return (
        <div className={styles.user_data}>
            <div className={styles.profile_image}>
                <img src="https://www.babyshop.com/images/197659/x_large_3x.jpg" alt=""/>
            </div>
            <div className={styles.avatar_image}>
                <img src="https://cdn.dribbble.com/users/2402074/screenshots/6760992/dribbble_shot_1-01_4x.jpg"
                     alt=""/>
            </div>
            <div className={styles.description}>
                User description
            </div>
        </div>
    )
}

export default User_summary;