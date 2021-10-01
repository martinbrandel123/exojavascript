const searchInput = document.getElementById('search')
const results = document.getElementById('results')
const API = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';



//const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
//console.log(fullNames);

function fetchcities () {
   fetch(API)
.then(function(blob){
    return blob.json()
})
.then(function(data) {
    console.log(data)
var test = data.map(cities => (
            cities.city
            ))
console.log(test)
    }) 
}

fetchcities()
