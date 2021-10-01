let total = 0 
let number = 0
let buttons = document.querySelectorAll('.box')
let titre = document.querySelector('h1')
let egale = document.querySelector('.egale')
let clear = document.querySelector('.clear')

function getNumber () {
    number = titre.textContent += this.id
    return number
}
function doTheCalcul () {
    titre.textContent = eval(number)
}
function clearNumber () {
    titre.textContent = ""
}


buttons.forEach(button => button.addEventListener('click', getNumber))
egale.addEventListener('click', doTheCalcul)
clear.addEventListener('click', clearNumber)