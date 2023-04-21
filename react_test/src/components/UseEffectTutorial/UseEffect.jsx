import styles from './UseEffect.module.css'
import {useState, useEffect} from "react";


const UseEffect = () => {

    /**
     * Обработка fetch + Race Condition (когда 2 запросы выполняются разное время и первым пришел последний запрос, а потом дошел первый запрос и перерисовался UI)
     */

    const [items, setItems] = useState([]);
    const [fetchedItemsType, setFetchedItemsType] = useState('posts');
    const [resourceType, setResourceType] = useState('posts');

    // Срабатывает при каждом ререндеринге (в данном коде первый ререндер - это setResourceType по клику на кнопку, и другие 2 это setстейты внутри useEfect fetchResource),
    // что бы срабатывало только 1 раз при начальной отрисовке компонента, нужно добавить пустые зависимости deps - []
    useEffect(() => {
        console.log('Hello World')
    }, [])

    // fetch запросы делаем внутри useEffect. И вызываем ее прямо там же
    // В зависимости передаем переменную которая будет доступна функции (пропсы, состояния)

    // Что бы побороть Race Condition нужно задать начальный флаг, а после в функции клинапе return () => {} поменять значение флага
    // Внутри же самой функции сохраняем значение только если флаг равен true
    // Функция клинапа отрабатывает каждый раз перез ререндером (перед изменением resourceType переданному в deps)
    // Флоу такой : как только мы нажали на другую кнопку, то поменяется resourceType, следовательно отработает клинап функция и поменятся значение active
    // и как только код дойдет до if (active), то ничего не для всех запросов, кроме самого последнего
    useEffect(() => {
        let active = true;

        const fetchResource = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const fetchedItems = await response.json();
            if (active) {
                setItems(fetchedItems);
                setFetchedItemsType(resourceType)
            }
        };

        fetchResource();
        return () => {
            active = false;
        }

    }, [resourceType]);


    /**
     * Клинап функции - нужны что бы после того как компонент пропал из DOM дерева, мы его явно удалили
     */

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        console.log('handleResize произошел')
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])




    return (
        <div className={styles.container}>
            <div>
                <button
                    className={styles.users}
                    onClick={() => setResourceType('users')}>
                    Users
                </button>
                <button
                    className={styles.posts}
                    onClick={() => setResourceType('posts')}>
                    Posts
                </button>
                <button
                    className={styles.comments}
                    onClick={() => setResourceType('comments')}>
                    Comments
                </button>
                <div></div>
            </div>
            <div>{windowWidth} in px</div>
            <div
                className={styles.info}
                style={{color: fetchedItemsType === 'users' ? 'red' : fetchedItemsType === 'posts' ? 'green' : fetchedItemsType === 'comments' ? 'blue' : 'black'}}>
                {fetchedItemsType}
                {items.map((item) => {
                    return <p key={item.id}>{JSON.stringify(item.body || item.name)}</p>;
                })}

            </div>
        </div>

    )
}

export default UseEffect;



