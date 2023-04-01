// 1. Получаем элемент по CSS селектору
// 2. Вешаем на нее лиснер, что по клику выполняй функцию toggleText
document.querySelector('.ft_button').addEventListener('click', toggleText)

// Создаем функцию toggleText 
// 1. Получить элемент по селектору
// 2. Перебираем классы у элемента - при нажатии на кнопку будет меняться класс между .ft_text и ft_text_show_yes
function toggleText(){
    document.querySelector('.ft_text').classList.toggle('ft_text_show_yes')
}



