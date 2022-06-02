const objectA = { // Присваем переменной A значение, в данном случае объект, в данном случае,
    a: 10,        // в памяти создается переменная objectA с ссылкой наобъект (0x3151), сам объект {}, создается
    b: true       // в другой области памяти
}

console.log(objectA) // objectA лежит в 0x3151 { a: 10, b: true }

const copyOfA = objectA // Так мы берем сслыку и копируем ее в другую переменную

copyOfA.a = 20 // Переприсваем свойству a, для объектов copyOfA и objectA, обративишись copyOfA

console.log(copyOfA) // copyOfA лежит в 0x3151 { a: 20, b: true }

console.log(objectA) // objectA лежит в 0x3151 { a: 20, b: true }

// Добавление нового свойства объектам copyOfA и objectA, обративишись к copyOfA

copyOfA.c = 'abc' // используя оператор '.', добавляем свойство c, с типом строка

console.log(copyOfA) // { a: 20, b: true, c: 'abc' }

console.log(objectA) // { a: 20, b: true, c: 'abc' }

copyOfA.d = {
    array: [1, 2, 3],
    boolean: true,
    string: 'string'
}

console.log(copyOfA) // { a: 20, b: true, c: 'abc', d: { array: [ 1, 2, 3 ], boolean: true, string: 'string' }

console.log(objectA) // { a: 20, b: true, c: 'abc', d: { array: [ 1, 2, 3 ], boolean: true, string: 'string' }
