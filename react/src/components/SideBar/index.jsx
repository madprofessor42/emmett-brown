import styles from './SideBar.module.css'

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <nav>
                <div className={styles.item}>
                    <a href="">Profile</a>
                </div>
                <div className={styles.item}>
                    <a href="">Messages</a>
                </div>
                <div className={styles.item}>
                    <a href="">News</a>
                </div>
                <div className={styles.item}>
                    <a href="">Music</a>
                </div>
                <div className={styles.item}>
                    <a href="">Settings</a>
                </div>
            </nav>
        </div>
    )
}

export default SideBar ;