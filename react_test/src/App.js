import './App.css';
import {Route, Routes, Link} from 'react-router-dom'

import {ProductsPage} from "./pages/ProductsPage";



const App = () => {
    return (
        <div className="app-wrapper">
            <ProductsPage/>
        </div>
    )
}


export default App;


