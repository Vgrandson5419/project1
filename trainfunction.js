'use strict'

function getCubevolumeandarea (sidelenght ){
if (sidelenght !== Number.isInteger()){
    console.log("Volume can not be found because of not correct syntax")
}


let volume = sidelenght * sidelenght * sidelenght
let area = sidelenght*sidelenght *6 
console.log(volume,area)
return volume;
return area; 
}


getCubevolumeandarea(5,6);