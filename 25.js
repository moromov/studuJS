//Работа с css классами

/*
.add()
.remove()
.toggle()
.contains()

*/

const heading = document.querySelector('h2');
heading.classList.add("red-text");
heading.classList.remove("red-text");

heading.classList.toggle('green-text');
heading.classList.toggle('green');

heading.classList.contains('red');