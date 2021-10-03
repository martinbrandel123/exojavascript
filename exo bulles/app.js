
let randomSize;
let bubble ;
let count = 0;

let div = document.querySelector('div')

function getRandomInt() {
    randomSize = Math.ceil(Math.random() * 10) * 40
    return randomSize ;
  }
function getRandomColor () {
    randomRgb = Math.ceil(Math.random() * 255)
    return randomRgb ;
}


function deleteBubble () {
  this.style.display = 'none'
  if (this !== '') {
    count++
  } 
  div.innerHTML = `points : ${count}`
}



function creatBubble() {
    bubble = document.createElement('span')
    let size = getRandomInt()
    bubble.classList.add('bubble')
    bubble.style.height = size + "px"
    bubble.style.width = size + "px"
    bubble.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`
    document.body.appendChild(bubble)
    bubble.addEventListener('click', deleteBubble)
}

setInterval(function(){
  bubble.classList.add('sty')
}, )
setInterval(function() {
  creatBubble()
},1000)












//bubble.style.transform = "scale(2)"