var panier = document.querySelector("#panier")

var article1 = document.querySelector("#article1")
var article2 = document.querySelector("#article2")
var article3 = document.querySelector("#article3")
var article4 = document.querySelector("#article4")
var article5 = document.querySelector("#article5")
var article6 = document.querySelector("#article6")
article1.onclick = function () {
    panier.appendChild(article1)
}
article2.onclick = function () {
    panier.appendChild(article2)
}
article3.onclick = function () {
    panier.appendChild(article3)
}
article4.onclick = function () {
    panier.appendChild(article4)
}
article5.onclick = function () {
    panier.appendChild(article5)
}
article6.onclick = function () {
    panier.appendChild(article6)
}
