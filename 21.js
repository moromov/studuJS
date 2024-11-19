//Объекты обход циклом for in (не путать с циклом for of)

const person = {
    userName: 'Никита',
    age: 18,
    isMarried: false,
    sayHi: function(name){
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
    }
}

for (let key in person){
    console.log(key,':', person[key]);
}