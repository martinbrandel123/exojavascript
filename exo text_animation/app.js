let words = ["Microsoft","Corporation"]
let text = document.querySelector('span')
let slash = document.querySelector('.slash')
let wordNumber = 0
let letterNumber = 0
let time = 100



console.log(words[0].length)


function letterInterval () {
  if (wordNumber >= words.length) {
    wordNumber = 0
  }
    if (letterNumber <= words[wordNumber].length) {
        text.innerHTML += words[wordNumber][letterNumber]
        letterNumber++
        if (letterNumber > words[wordNumber].length) {
          wordNumber++
          letterNumber = 0
          text.innerHTML = " "
        }
    }

}

function slashWink () {
  slash.classList.toggle('slash_invisible')
}

setInterval(letterInterval,time)
setInterval(slashWink, 600)
    