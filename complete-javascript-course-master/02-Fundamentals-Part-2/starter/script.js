'use strict'
//use strict mode
let hasDriverLicense = false;
const passTess = true;

if(passTess) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive now');

//Functions: Hàm

function logger() {
    console.log('Tên tôi là Thi');
}
console.log(logger); //calling / running/ invoking function
logger(); //calling / running/ invoking function

function cpuProcessing(thread, core){
    console.log(thread, core);
    const cpu = `CPU đang xử lý ${thread} trên ${core} core`;
    return cpu;
}
cpuProcessing(2,4);

