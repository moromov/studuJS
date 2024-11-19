//Классы. Констукторы объектов
//Представим ситуацию, когда нам нужно описать несколько одинаковых объектов

//Опишем класс, это как чертеж для всех будущих объектов person
//которые будут создаваться на его основе

class Person {
    constructor(userName, age,isMarried){
        this.userName =  userName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi(name){
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
    }
}

const person1 = new Person('Никита', 18,false);
const person2 = new Person('Павел', 20,false);

console.log(person1);
console.log(person2);

person1.sayHi('Марк');
person2.sayHi('Марк');

/*
const person1 = {
    userName: 'Никита',
    age: 18,
    isMarried: false,
    sayHi: function(name){
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
    }
}
*/
