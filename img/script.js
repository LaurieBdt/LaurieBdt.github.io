var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter >= 5) {
        counter = 1;
    }
}, 5000);

var btn = document.querySelector(".btn-menu")
var menu = document.querySelector(".menu")

btn.onclick = function () {
    menu.classList.toggle("open")
    btn.classList.toggle("open")
}