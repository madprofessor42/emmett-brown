import styles from './Modal.module.css';


const Modal = ({onClose, title, children}) => {
    // Что бы компонента модального окна была расширяемой, то создаем базовую компоненту Modal (где будет затемнение экрана и описание модалки)
    // А если мы хотим создать новую форму, то создаем для них уже отдельные компоненты и передаем в Modal нужный компонент
    // Что бы в компонент могли встраиваться другие компоненты, то указываем props.children
    return (
        <>
            <div className={styles.background} onClick={onClose}/>
            <div className={styles.modal}>
                <h1 className={styles.title}>{title}</h1>
                {children}
            </div>
        </>
    )
}

export default Modal;