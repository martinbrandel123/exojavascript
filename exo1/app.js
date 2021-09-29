var audio = document.querySelector('audio')
var test = document.querySelectorAll('.sound')

window.addEventListener('keydown', function(e) {
        var keyNumber = e.keyCode
        for (var i = 0; i < test.length ; i++) {
            var keyNumer = e.keyCode
            if (keyNumber == test[i].dataset.key) {
                test[i].lastElementChild.currentTime = 0
                test[i].lastElementChild.play()
                test[i].classList.add('sound_active')
                test[i].addEventListener('transitionend', function(e) {
                    e.target.classList.remove('sound_active')
                })
            }
        }
    })



