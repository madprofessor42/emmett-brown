let counter = localStorage.getItem('counter') || 0;
document.querySelector('.counter_value').innerHTML = counter;

// Забираем node элементы кнопок и преобразуем их в массив
const actions = Array.from(document.querySelectorAll('[data-action]'));

// устанавливаем евент лиснер для каждой кнопки (можно обернуть в цикл)
actions.forEach(action => {
    action.addEventListener('click', () =>{
        const type = action.dataset.action;
        
        switch (type) {
            case 'increase':
                counter++;
                break;
            case 'decrease':
                counter--
                break;
            case 'reset':
                counter = 0;
                break;
            case 'save':
                localStorage.setItem('counter', counter);
                break;
            case 'load':
                counter = localStorage.getItem('counter');
                break;
            case 'clear':
                localStorage.clear();
                break;
        }

        document.querySelector('.counter_value').innerHTML = counter;
    })
})


