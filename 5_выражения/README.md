# js-crash-course 

## JS-course Bogdan Stashchuk прохождение выражения

### Теория

#### Выражение

>Выражение всегда возвращает значение

Примеры выражений:

```
'abc' // передав 'abc' интерпретатору, мы получаем ту же строку в ответ ('abc')
10 // передав число, мы получим тоже число (10)
5 + 2 // передав выражение 5 + 2, с помощью оператора "+", мы получаем результат выражения (7)
c = 10 // выражение присваивания, используя оператор присвоения, получим результат,
которым будет присвоенное значение (10)
'Good' + 'Evening' // результатом выражения будет 'Good Evening'
a <= b || c !== d // тоже выражение возвращает true или false
myFunction(c, d) // вызов функции тоже выражение, которая возвращает результат
```

#### Выражение с побочными действиями (side-effects)

>Выражение с побочными действиями, не только возвращает значение, но и выполняет другие действия

```
a = 5 // кроме возвращения значения, используя оператор присваивания, мы создаем переменную "a",
которой присваивается значение 5 

b++ // увеличиваем значение на еденицу, выражение которое возвращает например 7, если b = 6, соответственно
выражение b++, совершает side-effect над выражением b

myFunction(c, d) // внутри функции передав определенные аргументы, мы можем обращаться к серверу, читать данные с файла
```

#### Результат некоторых выражений

![alt text](https://thumb.cloud.mail.ru/weblink/thumb/xw1/MV8T/mKRbwpsNe "expressions on js")
