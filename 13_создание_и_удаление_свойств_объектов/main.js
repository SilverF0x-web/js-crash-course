const myCity = {
    city: 'Tambov',
    popular: true,
    country: 'Russian Federation'
}

console.log(myCity.city) // Tambov

console.log(myCity.popular) // true

// Изменение значений свойств объекта, производится через оператор '.'
// При изменении объекта (свойств объекта), т.е. мутирование обекта, мы не присваиваем новое значение переменной myCity,
// т.к. переменная содержит ссылку на данный объект

myCity.city = 'Kazan'

console.log(myCity) // { city: 'Kazan', popular: true, country: 'Russian Federation' }

myCity.population = 'million'

console.log(myCity) // { city: 'Kazan', popular: true, country: 'Russian Federation', population: 'million' }

// Удаление свойств объекта

delete myCity.population // используя оператор удаления 'delete', удаляем свойство population объекта myCity

console.log(myCity) // { city: 'Kazan', popular: true, country: 'Russian Federation' }

// Доступ к значению свойства с использованием скобок

myCity['popular'] = false // переприсваиваем значение свойства 'popular'

myCity['nations'] = ['Russian', 'Tatar'] // добавляем свойство 'nations' c значением ['Russian', 'Tatar']

console.log(myCity) // { city: 'Kazan', popular: false, country: 'Russian Federation', nations: [ 'Russian', 'Tatar' ] }

// Добавляем новое свойство и значение в объект myCity с помощью квадратных скобок, в отличие от точечной записи можно использовать любое выражение

const countryPropertyName = 'population' // создаем переменную countryPropertyName (новое свойство объекта 'population') для myCity

myCity[countryPropertyName] = 'million' // присваиваем значение для переменной countryPropertyName в объекте myCity

console.log(myCity) // { city: 'Kazan', popular: false, country: 'Russian Federation', nations: [ 'Russian', 'Tatar' ], population: 'million' }