# js-crash-course 

## JS-course Bogdan Stashchuk прохождение динамическая типизация

### Теория

##### Статическа и динамическая типизации

###### Пример статической типизации

```
String a = 'abc' // Указывается тип переменной

int b = 20 // Указывается тип переменной

b = 'xyz' // Error, т.к. b это int
```

###### Пример динамической типизации

> Возможность присваивания разных типов возможно, как раз-таки за счет динамической типизации

```
a = 'abc' // String

a = 10 // Number
```

### Итоги

1. Все переменные объявлять перед их использованием
2. Стараться использовать const везде, где это возможно
