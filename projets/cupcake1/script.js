var btn = document.querySelector(".btn-menu")
var menu = document.querySelector(".menu")

btn.onclick = function () {
    menu.classList.toggle("open")
    btn.classList.toggle("open")
}