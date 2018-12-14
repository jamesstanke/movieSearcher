const apiKey = '1b30fad6'
let key = 't'

let searchBox = document.querySelector('#searchBox')
let poster= document.querySelector('#poster')
let title= document.querySelector('#title')
let actors= document.querySelector('#actors')

//Creating a variable called 'searchBox'
//searchBox is assigned to the input search box class
//The searchBox object will fire (aka call) a function when a user punches a key on their keyboard
//'e' refers to an object that contains data from the user
searchBox.addEventListener('keyup',function(e){

//IF nothing is typed, return and exit out of the function
if(!e.target.value)return

//Every time the event listener fires, it will call 'getMovie'
getMovie(e.target.value)


})


function getMovie(input){
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&${key}=${input}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    createMovie(data)


  });
}

function createMovie(movie){
if(movie.Error==='Movie not found!'){
  return
}
console.log(movie)
poster.src = movie.Poster
title.innerHTML = movie.Title
actors.innerHTML= movie.Actors
}





//API key for Zomato: 76c2a4952547f9a3f0ef666bb17dbe6a
