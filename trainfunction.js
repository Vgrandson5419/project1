'use strict'

function getCubevolumeandarea (sidelenght ){
    let volume = sidelenght * sidelenght * sidelenght
let area = sidelenght*sidelenght *6 


if  (Number.isInteger(sidelenght)){
    console.log(volume, area)
}else     {
console.log("Volume can not be found because of not correct syntax")
}

}


getCubevolumeandarea(7.5);




function getYourSeat (num){
const numberOfseats = {
    1 : [1,2,3,4],
    2: [5,6,7,8],
    3: [9,10,11,12],
    4:[13,14,15,16],
    5: [17,18,19,20],
    6:[21,22,23,24],
    7:[25,26,27,28],
    8: [29,30,31,32],
    9 :[33,34,35,36],
}
for (let key in numberOfseats ){
     if (numberOfseats[key].includes(num)){
        return key ;
     }
}


if (typeof(num) != "number"|| num <0 ||  !Number.isInteger(num) ){
    return  "Check the accuracy of given number"; 
}else if (num = 0 || num >36){
    return  "This kind of number of seats we don t have ";
}else {

}


}



console.log(getYourSeat(33));

function secondtask (num){
    const numberOfseats = {
    1 : [1,2,3,4],
    2: [5,6,7,8],
    3: [9,10,11,12],
    4:[13,14,15,16],
    5: [17,18,19,20],
    6:[21,22,23,24],
    7:[25,26,27,28],
    8: [29,30,31,32],
    9 :[33,34,35,36],
}
for (let key in numberOfseats ){
     if (numberOfseats[key].includes(num)){
        return key ;
     }
}


if (typeof(num) != "number"|| num <0 ||  !Number.isInteger(num) ){
    return  " Ошибка.Проверьте правильность введеного номера места"; 
}else if (num <= 0 || num >36){
    return  "Таких мест в вагоне не существует";
}else {

}
}

console.log(secondtask(33));
console.log(typeof(NaN))





function myfigure (){


    const lines = 5;
    let result = "";
    for (let i = 0;i <= lines ;i++) {
        result += "*"
        for (let j = 0 ; j <= i *2; j ++ ){
            result += "\n"
        }
         }return result;
}

console.log(myfigure ());

// lesson about Document Object Module - DOM
/*
function DOM (){
const box = document.getElementById('box')

console.log(box)

const buttons = document.getElementsByTagName('button');
console.log(buttons[0])

const circles  = document.getElementsByClassName('h1');

console.log(circles);
if (document.getElementById('box').onclick === true  ) {
    alert ('You clicked button "Click me "')
} 
}
DOM () ; 
*/

// Events and handlers lesson 41 Javascript course 


function  geteventandhandler(){


const btn = document.querySelectorAll('nav-menu');


btn.onclick = function (){

    alert('You clicked ');

};

const container = document.querySelector("#demo");

container.onclick = function (){

    console.log('You clicked paragraph')
};

container.addEventListener('click', deleteElement) => {
    console.log(container)
};

}

geteventandhandler();


console.log(document.body.parentNode) // Get in console HTML body 
console.log(document.body.childNodes)
console.log(document.body.firstChild)// Get first 
console.log(document.body.lastChild)

console.log(document.querySelector("#container")).parentNode

console.log(document.querySelector('data-cointaier'))

for (let node of document.body.Childnodes){
    if (node.Name === '#text' ){
        continue;
    }
    console.log(node);
}

pow(2, 4) // 2 in power of 4

function pow(power ,innum){
    let result = 1
    for (let i = 0 ; i<= innum ;i++ ){

    }
}
pow(2,4);

// Events on mobile application 

//touchstart 
//touchmove 
//touchend 
//touchenter
//touchend 
//touchleave
//touchcancel - when touchpoint is not registered on screen

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.container');

    box.addEventListener('touchstart', (e) => {
        e.preventDefualt();

        console.log('start')
    }
);    box.addEventListener('touchmove', (e) => {
e.preventDefualt();
console.log('moved ') 
    }
);

    box.addEventListener('toucheleft', (e) => {
        e.preventDefualt();
        console.log("end ")
    })
})

//Targettuoches 

//Async , dynamic scripts, defer 

const getp = document.querySelector('#top-nav')


getp.onclick = function (){
    console.log('You clicked body ')
};

function localscript (src){

const script = document.createElement('script');
script.src = src;
document.body.append(script);
script.async = false ;
document.body.append(script);

}

loadScript("js/lesson26.js");
laodScript("js/train.js");




const getbtns = document.querySelectorAll('button'),
        wrapper = document.querySelector('red');

        wrapper.addEventList('click', (event))

    console.log(getbtns[0].classList.add('red'));
    console.log(getbtns[1].classList.remove('red'));

    if (getbtns[1].classList.contains('blue')){
        console.log('red')
    }






buttons[0].addEventListener('click' , () =>{
 if (!buttons[].classList.contains('red')){
    btns [1].classList.add('red')
 } else {
    btns[1].classList.remove('blue')
 }
});
console.log(buttons[1].classList('red'));
