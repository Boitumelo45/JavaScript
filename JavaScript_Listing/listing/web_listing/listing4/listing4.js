"use strict"

var clear_button = document.getElementById('clear')
var revert_button = document.getElementById('revert')
var textToManipulate = document.getElementById("text")

function clear(object){
    object.style.display = 'none' //remove element
}

function revert(object){
    object.style.display = 'block' //revert back
}

clear_button.addEventListener('click', function(){
    clear(textToManipulate)
})

revert_button.addEventListener('click', function(){
    revert(textToManipulate)
})
