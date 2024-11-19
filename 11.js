//return

function sum(a,b){
    return a+b;
}

function dif(a,b){
    return a - b;
}


function doSomething(func){
    let x = 10;
    let y = 15;
    let result = func(x,y);
    console.log(result);
}

doSomething(sum); //25
doSomething(dif); //-5