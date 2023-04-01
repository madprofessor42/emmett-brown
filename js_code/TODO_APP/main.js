// Ждем когда страница загрузится и получаем элементы:
// 1. Сама форма ввода новой таски
// 2. Поле ввода имени таски
// 3. Общий блок всех тасок

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    // После того как странциа загрузилась, срабатывает лиснер на форму
    // При субмите формы мы 
    form.addEventListener('submit', (e) => {
        // 1. отключаем перезагрузку страницы preventDefault()
        e.preventDefault();
        
        // 2. Получаем значение поля
        const task = input.value;
        // 3. Если ничего не введено, то делаем алерт
        if (!task) { 
            alert('Please fill out the form');
            return;                                                 // Что бы не создалась запись, если ничего не ввели
        }

        // 4. Создаем div
        const task_el = document.createElement("div");
        // 5. Присваиваем ему класс task
        task_el.classList.add("task");

        // 6. Создаем div
        const task_content_el = document.createElement("div");
        // 7. Присваиваем ему класс content
        task_content_el.classList.add("content");

        // 8. Создаем кнопку input 
        const task_input_el = document.createElement("input");
        // 9. Присваиваем тип текст
        task_input_el.type = "text";
        // 10. Присваиваем класс text
        task_input_el.classList.add("text");
        // 11. Устанавливаем текст такой, который мы ввели ранее
        task_input_el.value = task;
        // 12. Устанавливаем атрибут readonly
        task_input_el.setAttribute("readonly", "readonly");


        // 13. К диву с контентом добавляем введенный текст
        task_content_el.appendChild(task_input_el);

        // 14. К диву с task добавляем внутренний див с контентом
        task_el.appendChild(task_content_el);

        // 15. К общему div блоку с тасками добавляем наши 2 внутренних div блока
        list_el.appendChild(task_el);


        // 16. Добавляем кнопки
        // Создаем div actions
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add('actions');

        // Создаем кнопки
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = 'Delete';

        // Добавляем кнопки под div actions
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        // Добавляем div actions к div task
        task_el.appendChild(task_actions_el);

        // Стираем введенный юзером текст (что бы при добавлении таски стиралось введенное значение)
        input.value = "";      
        
    

        // Когда нажали кнопку редактировать
        task_edit_el.addEventListener('click', () => {
            // Если у нас дефолтная страница и мы нажали на Edit
            if (task_edit_el.innerHTML.toLowerCase() === "edit"){
                // Убираем ридонли с форму с вводом
                task_input_el.removeAttribute("readonly");
                // Фокусируемся на поле ввода
                task_input_el.focus();
                // Меняем текст кнопки на save
                task_edit_el.innerHTML = "Save";
            }
            // Если мы редактируем таску и нажали на Save 
            else {
                // Ставим опять поле ввода readonly
                task_input_el.setAttribute("readonly", "readonly");
                // Меняем текст кнопки на Edit
                task_edit_el.innerHTML = "Edit";
            }
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        })
    })
})

