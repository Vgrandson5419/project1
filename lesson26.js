'use strict';
const UsdCurr = 100;
const discount = 0.9;
function convert (amount, curr){
    return curr *amount ;

}

function promotion (result){
    console.log(result * discount );
    return function () {

    }
}


const res = convert(500, UsdCurr) ;
promotion(res);
function test (){
    for (i = 1 ; i ){
        console.log(i); 
        if (i===3){
            return 
        }
        console.log('done')
    }
}
test();

function doNothing () {
    console.log(doNothing() === undefined )
}

 
function sayHello(){
    let name = "Anton" 
    result = console.log("Hello "+ name) 
    return result ;
}

sayHello();

















const str = "test"
const arr = [1,2,3]

console.log(str.length)

