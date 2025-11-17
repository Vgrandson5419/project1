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


function useOfMethods (){
const str = "test"
const arr = [1,2,3]

console.log(str.toUpperCase())
console.log(arr.length)
console.log(str.length)

const fruit = "Some fruit "
console.log(fruit.indexOf('m'))
const logg = "Big friendly earth"

console.log(logg.slice(1, 5))
let num = 14.144444
console.log(Math.round (num))
const pixels = "12.2px " 
console.log(parseInt(pixels))
} 

useOfMethods(); 


function makeFigure(){
    const lines = 11;
    let result = "";
        for (let i = 1; i <= lines ; i ++ ){
            result+= 1  
        }console.log(result )

}
makeFigure();


 function checkDataaccuracy (data, callback ){
    console.log(`Data  ${data}`)
    callback();
 }

 function done  (){
    console.log("I have checked data ")

 }
 checkDataaccuracy ('has come ', done)




function learnDestructionOfObject(){
 const Obj = {
    name: "room" , 
    heigth : 2,
    width :4,
    colors : { 
    border: 'black' ,
    bg : 'red', 


    }
 }
let counter = 0; 
 for (let key in Obj ){
    if (typeof (Obj [key]) === 'Objects '){
            for (let i in options ){
                console.log(`Object  ${key }Have conditions  ${Obj[key]}`)
            }counter++;
    }
console.log( `Conditions :${key } Have a condition ${Obj[key ]}` )
 }
console.log(Object.keys)

}
learnDestructionOfObject();



function oneMoreDistructionOfObject(){


    let Object = {
        name: "fridge", 
        color:{
            border: "black",
            bg: "white",
        }


    }
    for (let keys in Object ){
        if (keys === 'Objects ')
            console.log(`The condition of fridge ${ [keys]} ` )
    }

}
oneMoreDistructionOfObject();

function MakingaFigure (){
 const lines = 5;
 let  result = "";
    for (let i = 1; i <= lines; i++ ){
        result += "*"
        if (result <5 ){
            result += "\n"
        }
    }console.log(result)

}
MakingaFigure();