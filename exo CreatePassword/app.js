// var data
const dataLowerCase = "abcdefghijklmnopqrstuvwxyz";
const dataUpperCase =  dataLowerCase.toUpperCase();
const dataNumbers = "012345678901234567890123456789";
const dataSymbols = "&é'(-è_çà)=/*-+!:;,?./§$£¨^µ%*ù"

//var DOM
let btn = document.getElementById('submit_btn')
let inp = document.getElementById('number')
let password = document.getElementById('password')


//function 
function createPassword () {
    let globalArray = []
    globalArray.push(...dataLowerCase)
    globalArray.push(...dataUpperCase)
    globalArray.push(...dataNumbers)
    globalArray.push(...dataSymbols)
    let mixedArray = globalArray
                    .sort(()=> Math.random() - 0.5)
                    .splice(1, inp.value)
                    .join("")
    password.innerHTML = mixedArray
}





// listener
btn.addEventListener('click', createPassword)













