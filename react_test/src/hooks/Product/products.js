import {useEffect, useState} from "react";
import axios from "axios";


export const UseProducts = () => {

    // Запрос на получение данных о продуктах
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchResource = async () => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');
            setProducts(response.data)
        }

        fetchResource();
    }, [])

    // Добавление продукта
    const addProduct = (product) => {
        setProducts(prev => [...prev, product])
    }

    return {products, addProduct}
}


