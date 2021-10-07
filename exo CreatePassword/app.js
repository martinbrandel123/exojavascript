const dataLowerCase = "abcdefghijklmnopqrstuvwxyz";
const dataUpperCase =  dataLowerCase.toUpperCase();
const dataNumbers = "012345678901234567890123456789";
const dataSymbols = "&é'(-è_çà)=/*-+!:;,?./§$£¨^µ%*ù"

//let number = 







// DOM VAR 
let btn = document.getElementById('submit_btn')
function createPassword () {
    let globalArray = []
    globalArray.push(...dataLowerCase)
    globalArray.push(...dataUpperCase)
    globalArray.push(...dataNumbers)
    globalArray.push(...dataSymbols)

    let mixedArray = globalArray.sort(()=> Math.random() - 0.5)
         console.log(mixedArray)   
}





btn.addEventListener('click', createPassword)













