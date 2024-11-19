//Методы массивов

/*
arr - название массива
arr.push(items) - добавить элемент в конец массива
arr.shift() - удалить элемент из конца массива
arr.unshift(...items) - добавить элемент в начало массива
arr.splice()
*/
var auto = ['Tesla','BMW','Audi', 'Mazda'];
console.log(auto);

auto.push('Nissan');
console.log(auto);

auto.splice(2,1); //стартуй со второго элемента и удали один элемент
console.log(auto);