'use strict'; // Strict mode for better error checking

// lesson 19 iF coditions and  switch case with strong data type checking
if ( 4==9){
    console.log('THe if is working ');
}else{
    console.log('Error');
}

const num =  45;
if (num <44 ){
    console.log('Num is less than 44'
    )
}else if (num >100){
    console.log('Number is more than 100')
}else {
    console.log('Is more than 44 and less than 100')
}


(num === 50 )?console.log('Confition is true ') : console.log('Condition is false');//Ternary operator example 


const num1 = 59;


switch (num1){
    case 46: console.log('It is false ');
        break;
    case 59 : console.log('The number is 59');
        break;
    default: console.log('Nothing matched ');
        break;
}
// lesson 20 LOOPS


//let apple = 3;
//let pineapple = 1;
//const cola = 0;

console.log(apple ===3 && cola  && pineapple);

console.log(1 && 0 ); 

console.log(1&& 5 );
console.log(22&& "fafda");
console.log(1||0);
if (apple === 3 && cola === 1 && pineapple){
    console.log('We all have eaten ');
}
    else {
        console.log('We will eat at different place  ');
    }
console.log(apple &&pineapple);


let apple = 3;
let pineapple = 1;
const cola = 0;
if (apple === 3 || cola === 1 || pineapple){
    console.log('We all are blessed ');
}
    else {
        console.log('We will sit at different place  ');
    }


// Or operater is stopped when there is truth 
// && and operator is stopped when there is false 


let junReport = 0; 
    febReport = 0;
    marchReport = 0;
    aprilReport = 0;

  if (junReport && febReport && marchReport && aprilReport){
    console.log('All four month reports are sent')
    }else if (junReport && febReport || marchReport && aprilReport) {
    console.log('Some reports are not send yet')
    }else {}
    console.log('No reports are send yet')
