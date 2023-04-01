import styles from './Profile.module.css'
import User_summary from "./User_summary/index.jsx";
import Submit_post from "./Posts/Submit_post";
import Submited_posts from "./Posts/Submited_posts";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <User_summary/>
            <div className={styles.posts}>
                <Submit_post/>
                <Submited_posts/>
            </div>
        </div>
    )
}

export default Profile;