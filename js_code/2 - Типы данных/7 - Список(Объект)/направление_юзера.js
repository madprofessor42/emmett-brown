// написать функцию, в которую мы указываем череду направлений куда должен повернуть и пройти герой (R for turning right, L for turning left, A for advancing)
// Если на вход подают RRALAA it means turn right => turn right => advance (y is now -1) => turn left => advance => advande (x is now 2). 
// The rusult should look like this {x:2, y:-1, direction:right}. Final directions should be relative to starting position (where the user is looking at)
// starting pisition is looking up

function calculateDirection(input=''){
    const DIRECTIONS = ['up', 'right', 'down', 'left'];
    let x = 0, y = 0, directionIndex = 0;                // x,y - наши стартовые позиции, directionIndex = куда мы смотрим по дефолту

    // 2.1
    // Высчитывается направление куда будет смотреть человек. Если ввели R, то выполняется makeTurn(-1), и directionIndex становится 0+(-1) = -1
    const makeTurn = step => {
        directionIndex = directionIndex + step
        
        if (directionIndex === -1) directionIndex = 3;   // Если мы повернули налево, то индекс будет directions[3] === left
        if (directionIndex === 4) directionIndex = 0;    // Если мы смотрели налево и повернули на право, то directions[0] === up
    }

    // 2.2
    // Если юзер передал в getCommand[A], то тогда мы считываем текущее положение и сверяем с массивом DIRECTIONS
    // После получение значения из DIRECTIONS подставляем его как ключ объекта getDirections
    const move = () => {
        const getDirections = {
            up: () => y++,
            right: () => x++,
            down: () => y--,
            left: () => x--
        }
        getDirections[DIRECTIONS[directionIndex]]();
    }

    // 1.
    // Пробегаемся по введенной юзером строке, и вызываем метод объекта. 
    // Например если считываемая буква R, то вызывается объект getCommand с ключем R, а так как эта функция, то добавляем в конце ()
    for (let command of input){
        const getCommand = {
            L: () => makeTurn(-1),
            R: () => makeTurn(1),
            A: () => move()
        }
        getCommand[command]();
    }

    return {x, y, direction: DIRECTIONS[directionIndex]}
}

console.log(calculateDirection('RRLA'))


