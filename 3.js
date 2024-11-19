//Типы данных

let userName = 'Nikita'; //строка
let number = 30; //число
let isMarried = false; //Логический тип данных

//Динамическая типизация
let someVariable = 'Some value'; //строка
someVariable = 50; //число

//Плохой пример нейминга
let u = 'Bob';
//Хороший пример нейминга
let name = 'Bob';

//Значение null
// "ничего", "пусто", или "значение неизвестно"

let age = 32;
age = null;

//Значение undefined
//Обозначает что значение не было присвоено
//Если переменная объявлена, но ей не присвоено никакого значенения,
//то ее значение будет undefined

let firstName;
console.log(firstName); //-> undefined

//Оператор typeof
const someName = 'Nikita';
console.log(typeof someName); // -> string

