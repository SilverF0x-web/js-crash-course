console.log(myName) // Ref error

let myName

console.log(myName) // undefined - т.к., переменная не определена

myName = 'Aleksey' // определяем переменную myName

console.log(myName) // получаем в консоли Aleksey

console.log(console.log(10)) // 10 - действие выполненное внутри функции log и undefined - результат вызова функции

// const myName // SyntaxError: Identifier 'myName' has already been declared, при декларировании переменной
// с помощью ключевого слова const, мы обязательно должны присвоить ей значение

const myName = 'Aleksey'

// myName = '' // TypeError: Assignment to constant variable. Если переменная уже была определена, мы получим ошибку

console.log(myName)
