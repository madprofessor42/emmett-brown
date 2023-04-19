props - или же properties. По сути так как каждый компонент - это функция, то props - это аргументы функции (компонента)

Нужно, что бы написав код компонента 1 раз мы могли динамически менять значения. Например 1 раз указали что в компоненте отображам цену, а цену всегда получаем по API и рисуем

В примере ниже мы в App.js указали 1 раз объект продукта нам нужен (который мы заранее положили в data) и в компоненте Product получаем доступ к ключам
```angular2html
App.js

import {products} from './data/products'

const App = () => {
    return (
        <div className='app-wrapper'>
            // Передаем компоненту Products аргумент product и задаем его
            <Products product={products[0]}/>
        </div>
)
}
```
```angular2html
product.js

export const products = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {"rate": 3.9, "count": 120}
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {"rate": 4.1, "count": 259}
        }
]


```
```angular2html
Product.jsx

import styles from './Products.module.css'

// В самом компоненте прописываем props
const Products = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            // И получаем доступ к переданному props
                <div className={styles.title}>{props.product.title}</div>
            </div>
        </div>
    )
}

export default Products;
```

