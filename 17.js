//Обход массива циклом for

/*
var auto = ['Tesla','BMW','Audi', 'Mazda'];

for (let i = 0; i < auto.length; i++){
    console.log(auto[i]);
}

*/

//Обход массива циклом for (of)

/*

var auto = ['Tesla','BMW','Audi', 'Mazda'];

for (let item of auto){
    console.log(auto);
}

*/

//Обход массива. Метод forEach()

var auto = ['Tesla','BMW','Audi', 'Mazda'];

auto.forEach(function(item,index){
    console.log(`${item} => ${index}`)
})
