
```angular2html
const App = () => {
    // useState возвращает кортеж. 0 элемент массива - какая-то переменная. 1 элемент массива - функция позволяющая изменять состояние 0 элемента
    // Так же нужно указать дефолтное значение. Так как это счетчик, то указываем 0. Если бы была логика отображения страницы, то указали бы false/true
    const [count, setCount] = useState(0); 

    const countClick = () => {
        setCount(count + 1)                // При вызове функци меняем состояние count
    }

    return (
        <div className="container">
            <h1 className="font-bold">Test JXS</h1>
            <div className="buttonGroup">
                <button onClick={countClick}>Click me!</button>
                <span>{count}</span>
            </div>
        </div>
    );
}
```