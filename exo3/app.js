const inputs = document.querySelectorAll('input')
const root = document.querySelector(':root')

const changeValue = function(e) {
    root.style.setProperty(`--${e.target.name}`, `${e.target.value}`+`${this.dataset.index}` )
}

for ( var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', changeValue)
    inputs[i].addEventListener('mousemove', changeValue)
    
}


/*let input = document.querySelectorAll('input')
let image = document.querySelector('img')
let body = document.querySelector('body')

for(var i = 0; i < input.length; i++) {
    if (input[i].name == "padding") {
        input[i].addEventListener('change', function() {
            padding = `${this.value}px`;
            image.style.padding = padding
        })
    } else if (input[i].name == "color") {
        input[i].addEventListener('change', function() {
            color = `${this.value}`;
            body.style.backgroundColor = color;
        })
    }else if (input[i].name == "blur") {
        input[i].addEventListener('change', function() {
            getBlur = `${this.value / 20}px`;
            image.style.filter = `blur(${getBlur})`;
        })
    }
}*/



