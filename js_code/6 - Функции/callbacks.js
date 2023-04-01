// Вызываем другую функцию, если условие подходит. Аргументы userAgreed и userDeclined функции ask называются функциями-колбэками или просто колбэками.
function ask(answer, yes, no){
    if (answer === 'I agree') yes();
    else no();
}

function userAgreed(){
    console.log('Congrats')
}

function userDeclined(){
    console.log('That\s a pity')
}
/*использование: функции userAgreed, userDeclined передаются в качестве аргументов ask*/
ask('I agree', userAgreed, userDeclined)            // Congrats
ask('', userAgreed, userDeclined)                   // Thats a pity

/*Мы можем переписать этот пример значительно короче, используя Function Expression*/
ask(
    'I agree', 
    function() {console.log('Congrats')}, 
    function() {console.log('That\s a pity')}
    )



