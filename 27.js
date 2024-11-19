//Работа с прослушкой событий

const button = document.querySelector('#button');
const img = document.querySelector('#logo');

button.value = 'Удалить';

/*button.addEventListener('click',function(){
    console.log('click!');
    img.remove();
})

*/

button.onclick = function(){
    console.log('click!');
    img.remove();
}