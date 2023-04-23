import styles from './Products.module.css'
import {useEffect, useState} from "react";


const Products = ({product}) => {

    // Компонента должна хранить только свой шаблон. Показываться они будут через map() в pages > ProductsPage
    // Не задаем контейнер элементов, так как в таком случае он продублируется для каждого элемента. Контейнер задаем в pages > ProductPage
    const [details, setDetails] = useState(false);

    return (
        <>
            <div className={styles.item}>
                <img className={styles.image} src={product.image} alt={product.title}/>
                <p className={styles.title}>{product.title}</p>
                <span className={styles.price}>{product.price + " $"}</span>
                <button
                    className={styles.descriptionButton}
                    onClick={() => setDetails(prev => !prev)}
                >
                    {details ? 'Hide Description' : 'Show Description'}
                </button>
                {details &&
                    <p className={styles.description}>{product.description}</p>}
            </div>
        </>
    )
}

export default Products;



