let btn = document.getElementById("btn")

function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = randomColor()
})