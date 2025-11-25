"use strict "
function myscript(){
let a = 3; 
let b = 5 ;
 if (a >b){
    console.log("a is bigger than b")
 }else if (a<b){
    console.log("b is bigger than a ")
 }else {
    console.log('equal each other ')
 }
}

function heading(){


}
// динамическая типизация  

console.log(typeof (String(4)))

// способ

console.log(typeof (null + ""))

const num = 5; 

console.log("https "+ num)

const fontSize = 26 + "px"; 

// to number 

console.log(typeof(Number('4')))


// унарный плюс 
console.log(typeof(+ '5  '))

console.log(typeof(parseInt('15px', 10 )))

// to booelean 

// '0', '', undefined , Nan

let switcher = null; 


if (switcher ) {

   console.log('Working..')
}

switcher = 1 ;

if (switcher ){
   console.log("Working ..")

}


console.log(typeof(Boolean('4')));

console.log(typeof(!!'4444'));

//Прололжение функции

let number = 5; debugger 


function LogNumber(){
   let number = 4; debugger 
   console.log(number);
}

 number = 6;
LogNumber();debugger 





   const base = 5;
   const times = 3; 

   const lastchr = base *times ; 
   let result = "";

   for (let i = 0; i <= times; i++){
      for (let j = 0; j <= times * base ; j++)
         console.log(result)
        if (typeof(times) === 'number' || times <= 0){
      console.log(base)

   }
   
   console.log(result)
    }
   
 


   let numbr = 44;
while (numbr <55 ) {
      console.log(numbr);
      numbr++;
       
   }