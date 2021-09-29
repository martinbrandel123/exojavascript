var sec = document.querySelector('.sec')
var min = document.querySelector('.min')
var hour = document.querySelector('.hour')

setInterval(function() {
   rightDate()
},1000)

function rightDate () {
   const now = new Date()
   console.log(now.getSeconds())

   var rotationSec = now.getSeconds() * 6 - 90;
   sec.style.transform = `rotate(${rotationSec}deg)`;

   var rotationMin = now.getMinutes() * 6 - 90;
   min.style.transform = `rotate(${rotationMin}deg)`;

   var rotationHour = now.getHours() * 30 -90; 
   hour.style.transform = `rotate(${rotationHour}deg)`;

}
