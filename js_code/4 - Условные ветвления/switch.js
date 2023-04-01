// switch - заменяет несколько if конструкций. Это более наглядный способ сравнить выражение сразу с несколькими вариантами
let a = 2 + 2;

switch(a) {                         // какое значение должно совпасть. Проверка на равенство строгая (должны совпадать и типы данных)
    case 3:                         // if (x === 'value1') в качестве значения case должно быть значение Integer/String или выражение, которое дает Integer/String
        console.log('Low')
        break
    case 4:
        console.log('Exactly')            // switch будет проверять каждый case, пока не найдет нужный
        break                       // break нужен что бы остановить проверку, если его не поставить, то выполнятся все кейсы после нужного (case 4, case 5, default)
    case 5:
        console.log('too much')
        break
    default:                        // не обязательный элемент, выполняется если не сопвал ни один case
        console.log('no such values')
}

// можно группировать case - это побочный эффекn того, что при отсутствии break выполняется несколько case подряд
switch(a) {                         
    case 4:
        console.log('Exactly')            
        break
    case 3:                       
    case 5:
        console.log('Wrong')
        break   
    default:                        
        console.log('no such values')
}


// можно использовать boolean выражения в case
const y = 1;
let b = 0;
switch (y){
    case b+1:
        console.log('True, y equals b+1 since b is 0 and y is 1')
        break
    default:                        
        console.log('Wrong')
}


// тип имеет значение, проврека на равенство всегда строгая ===
const string_var = '0'
switch(string_var){
    case 0:
        console.log('wrong')
        break
    case '0':
        console.log('right')
        break
}


// использовать Boolean значения в case
let foo = 2;
switch (true) {                         // указываем true 
    case foo >= 1 && foo <= 3:          
        console.log('Yes')
        break
    default:
        console.log('No')
}











