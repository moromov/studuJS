//Ключевое слово this

const person = {
    userName: 'Никита',
    age: 18,
    isMarried: false,
    sayHi: function(name){
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
    }
}

person.sayHi('Марк');
