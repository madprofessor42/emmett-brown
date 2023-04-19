import styles from './Products.module.css'
import {useState} from "react";


const Products = (props) => {

    // Задаем состояние для кнопки скрыть, показать описание
    const [descriptionVisible, setDescriptionVisible] = useState(false);
    // При вызове функции будет менять состояния на обратное
    const changeVisibility = () => {
        setDescriptionVisible(!descriptionVisible)
    }

    const

    // Если описание не видно - descriptionVisible = false, то отображаем Show Description, в другом случае Hide Description
    // Так же если есть описание, то отрисовываем тэг <p> где содержится описание
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <img className={styles.image} src={props.product.image} alt={props.product.title}/>
                <p className={styles.title}>{props.product.title}</p>
                <span className={styles.price}>{props.product.price}</span>
                <button className={styles.descriptionButton} onClick={changeVisibility}>
                    {descriptionVisible ? 'Hide Description': 'Show Description'}
                </button>
                {descriptionVisible &&  <p className={styles.description}>{props.product.description}</p>}
            </div>
        </div>
    )
}

export default Products;



