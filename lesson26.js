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
    for (i = 1 ; i < UsdCurr ; i ++){
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
            result+= "*"
            if(result >1 ){
                result+= "*"
            }    console.log(result)// console .log before closing condition for
        }
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
let result = '';

for (let i = 0; i < lines ;i++ ){
    for(let j = 0; j < lines - i ; j ++){
        result += " "
}
    for (let j = 0; j < 2 * i +1; j ++ ){
        result += "*"
    }
    result += "\n"
}
console.log(result)
}
MakingaFigure();

function MakingOppositefigure (){
    const lines = 5;
    let result = "";

    for (let i = lines - 1 ; i >= 0 ; i--){
        for (let j = 0 ; j <lines - i ; j++)
            result += " "
    
    for (let j = 0 ; j < 2 * i +1 ; j++){
        result += "*"
    }result += "\n"
    }
   console.log(result)
}
MakingOppositefigure();



        const massive = [1 , 2, 3 ,4 ,5 ]; 

        massive.sort();
        console.log(massive )



        massive.forEach(function(item, i, massive) {
                console.log(`${i} : ${item} )inside massive `
        })

        /*massive[10] = 9; 

        console.log(massive.length )*/

       /* massive.pop()
        massive.push(5)

        console.log(massive)*/

function lesson31 (){ 
        for (let i = 0; i < massive.length; i++){
            console.log(i)
        }

        for (let value of massive){
            console.log(value)
        } 


    const str = prompt('', '')
         
    const products =  str.split("-");
    products.sort ();
    console.log(products.join(',  ') )

    function compare (a,b){
        return a -b ;
    }
}


const obj = {
    a: 5 , 
    b: 1 , 
}

const copy = obj; 

copy.a = 10 ;
console.log(copy);


function copy (mainObj){
    let Obj = {};

    let key  ;
    for (key in mainObj ){
        objCopy[key ] = mainObj[key]
    }    
    return Obj.copy
}


const Numbers  =   {
    a:2, 
    b:5,
    c :{

    }
}


const add = {

    d:33,
    e:39,

}

console.log(Object,assign(Numbers,add))


const video = ['Youtube', 'Twitch', 'Kick'] ,
    blogs = ['wordpress','livejournal ', 'bloger'],
    games =['cs go ', 'fortnite']
    internet = [...video, ...blogs ,'vk', 'facebook', ...games ];// 

    console.log(internet)

    function  log(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2,5,7,];
   log(...num)

   const array = ['a', 'b'];


   const newarray = [...array]

   const q = {
    one:1,
    two:2,
   }




function makingFigure() {
const lines =7;
let result = "";


    for (let i = 0; i <= lines ; i ++){
        for(let j = 0; j < lines - i ; j++){
            result += " "
        }
    for (let j = 0 ; j < 2*i  + 1 ; j++){
        result += "*"
    }result += "\n"
        }
        console.log(result)
}
makingFigure();


function makingFigureonemoretime() {
    const lines = 7; 
    let result = "";

    for(let i = lines - 1 ; i >= 0 ; i --){
        for (let j = 0; j < lines - i ; j++){
            result += " "
        }
    for (let j = 0; j < 2 * i +1 ; j ++ ){
    result += "*"
    }result += "\n"
        }
        console.log(result)

}
makingFigureonemoretime();


function ex1 (Name){
    const sayHello = "Привет,"
    const result = sayHello + Name
    console.log(result)
    return result; 
}
 
const Name = "Антон ";

function exerciseThree (base, times ) {

    
    for(let i = base ; i < base *times  ; i++  ){
            base += base       
        
    }console.log(base)
}


exerciseThree (base, times);


// Место для первой задачи
function sayHello(name) {

    let sayHello = 'Привет' ;
    const result = sayHello + name ;
    return result ;
}
 const name = ", Alex"

// Место для второй задачи
function returnNeighboringNumbers(intnumber) {
    
    const massive = [intnumber - 1 , intnumber,intnumber +1 ]
    
    return massive ;

}

const intnumber = 4;

// Место для третьей задачи
function getMathResult(base,times ) {
    
    const t = typeof(times)
    for (let i = base ; i < base * times; i ++){
        base += base  
    }
    if ( t === isNotaNumber() || t <= 0  ){
        return base ;
    }

}


getMathResult (3,5);