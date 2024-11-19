//Объекты. Методы в объектах

const person = {
    userName: 'Nikita',
    age: 18,
    isMarried: false,
    sayHi: function(name){
        console.log(`Привет, ${name}`)
    }
}

person.sayHi('Nikita');
