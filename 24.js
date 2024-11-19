//Выбор коллекции элементов

const headings = document.querySelectorAll('h2');
console.log(headings);

for (let item of headings){
    console.log(item);
    item.classList.add('red-text');
}

const p2 = document.querySelector('p');
/*
for (let p of p2){
    p.classList.add('green-text');
}
*/

p2.forEach(function (item){
    item.classList.add('green-text');
})

//Также есть следущие методы
document.getElementsByClassName("link"); //выбор коллекции элементов по css классу
document.getElementsByTagName("h2"); //выбор коллекции элементов по тэгу
document.getElementById('header'); //выбор одного элемента по ID