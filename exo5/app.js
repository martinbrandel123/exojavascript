var cols = document.querySelectorAll('.col')

var changeFlex = function() {  
        
        document.querySelector('.bot_title_active').classList.remove('bot_title_active')
        document.querySelector('.top_title_active').classList.remove('top_title_active')
        document.querySelector('.title_size').classList.remove('title_size')
        document.querySelector('.col_flex').classList.remove('col_flex')
        
        this.childNodes[1].classList.add("top_title_active")
        this.childNodes[5].classList.add("bot_title_active")
        this.childNodes[3].classList.add('title_size') 
        this.classList.toggle('col_flex')        
}



for (var i = 0 ; i < cols.length; i++) {
 //   console.log(cols[i])
    cols[i].addEventListener('click', changeFlex)
    

}




