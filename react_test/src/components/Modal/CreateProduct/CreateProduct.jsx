import styles from './CreateProduct.module.css'
import {useState} from "react";
import axios from 'axios';


const CreateProduct = ({onCreate}) => {
    // Что бы хранить данные которые мы вписываем в форму
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    // Что бы форма не перезагружала страницу делаем preventDefault()
    // Ну и так же здесь прописываем запрос к серверу на создание
    const submitHandler = async (event) => {
        event.preventDefault();
        const productData = {
            title: title,
            price: price,
            description: description,
            image: 'https://i.pravatar.cc',
            category: 'electronic',
            rating: {
                count: 10,
                rate: 45
            }
        }

        const response = await axios.post('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }


    return (
        <form onSubmit={submitHandler}
              className={styles.form}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="Enter product title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            <input
                type="text"
                className={styles.inputField}
                placeholder="Enter product price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}/>
            <input
                type="text"
                className={styles.inputField}
                placeholder="Enter product description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}/>
            <button
                type="submit"
                className={styles.create}>Create
            </button>
        </form>
    )
}

export default CreateProduct;


