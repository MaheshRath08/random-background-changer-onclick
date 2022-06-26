let btn = document.getElementById("btn")

function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);         //generates a random decimal code
}

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = randomColor()     //call the function with the DOM 
})