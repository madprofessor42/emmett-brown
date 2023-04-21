import './App.css';
import {Route, Routes, Link} from 'react-router-dom'

import Products from "./components/Product/Products";
import {products} from './data/products'

import UseEffect from './components/UseEffectTutorial/UseEffect'





const App = () => {
    return (
        <div className="app-wrapper">
            <UseEffect/>

        </div>
    )
}


export default App;


