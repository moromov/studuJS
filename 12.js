//Самовызывающая функция IIFE

(function(){
    console.log('Привет');
}) ();

(function (a,b){
    console.log(a+b);
})(10,1);