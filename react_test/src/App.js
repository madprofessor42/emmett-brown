import './App.css';
import Products from "./components/Products";
import {products} from './data/products'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Products product={products[0]}/>
            <Products product={products[1]}/>
        </div>
    )
}


export default App;


