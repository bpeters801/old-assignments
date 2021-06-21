var width = document.getElementById("square")
width.style.padding = "200px"
width.style.height = "200px"
width.style.border = "10px solid black"
width.style.margin = "300px"

var squareColor = document.getElementById("square");

document.getElementById("square").addEventListener("mouseover", function (){
    squareColor.style.backgroundColor = "blue";      
})

document.getElementById("square").addEventListener("mousedown", function (){
    squareColor.style.backgroundColor = "red";  
})

document.getElementById("square").addEventListener("mouseup", function (){
    squareColor.style.backgroundColor = "yellow";
})

document.getElementById("square").addEventListener("dblclick", function (){
    squareColor.style.backgroundColor = "green";
})

document.getElementById("square").addEventListener("wheel", function (){
    squareColor.style.backgroundColor = "orange";
})

document.getElementById("square").addEventListener("keypress", function event (){
    if (event.which == 66){
        squareColor.style.backgroundColor = "blue";
    }     
})

document.addEventListener("keydown", e => {
    if(e.key === 'b') {
        square.style.backgroundColor= "blue"
    } else if (e.key === 'r') {
        square.style.backgroundColor= "red"
    } else if (e.key === 'g') {
        square.style.backgroundColor = "green"
    } else if (e.key === 'y') {
        square.style.backgroundColor = "yellow"
    } else if (e.key === 'o') {
    square.style.backgroundColor ="orange"
    }
})