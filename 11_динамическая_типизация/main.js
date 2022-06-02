let a = 10

console.log(a) // 10

a = true

console.log(a) // true

a = 'Aleksey'

console.log(a) // Aleksey

a = undefined

console.log(a) // undefined

function a() { // Функция является значением переменной a
     console.log('Hey there')
 }
 a() // Hey there

a = 10 // Присваиваем число

a() // TypeError: a is not a function

const a = () => { // Используя ключевое слово const присваиваем переменной 'a' стрелочную функцию,
    console.log('Hey there') // во избежание проблем с динамической типизацией
}

a() // Hey there

a = 10 // На этом этапе мы уже не можем присвоить, новое значение для переменной 'a' => TypeError: Assignment to constant variable.

a() // Здесь код уже не выполняется
