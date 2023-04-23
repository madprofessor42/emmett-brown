import React, {useContext, useState} from 'react'
import {UseProducts} from '../hooks/Product/products'
import Products from '../components/Product/Products'
import Modal from '../components/Modal/Modal/Modal'
import CreateProduct from '../components/Modal/CreateProduct/CreateProduct'

import styles from "./ProductsPage.module.css"

export const ProductsPage = () => {
    const {products, addProduct} = UseProducts()
    const [modal, setModal] = useState(false);


    const createHandler = (product) => {
        setModal(false);
        addProduct(product);
    }

    return (
        <div>
            <div className={styles.container}>
                { products.map(product => <Products product={product} key={product.id} />) }
            </div>

            {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <div className={styles.addProduct} onClick={() => setModal(true)}></div>
        </div>
    )
}

