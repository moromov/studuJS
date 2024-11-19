//Объекты. Свойства объектов

let userName = 'Nikita';
let age = 18;
let isMarried = false;

const person = {
    userName: 'Nikita',
    age: 18,
    isMarried: false
}

console.log(person);
console.log(person.userName); 
console.log(person['age']);
person.profession = 'JS developer'; //добавить элемент
console.log(person);

delete person.age; //удаление элемента
console.log(person);
