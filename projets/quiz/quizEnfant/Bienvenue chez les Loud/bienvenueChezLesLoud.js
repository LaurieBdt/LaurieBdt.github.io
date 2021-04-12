var buttonsubmit = document.querySelector("#buttonsubmit");
var cScore = document.querySelector("#score")

buttonsubmit.onclick = function check(e){
    e.preventDefault()
    localStorage.setItem('score', cScore.value);
    
    var c = 0;

    var r1 = document.quiz.reponse1.value;
    var r2 = document.quiz.reponse2.value;
    var r3 = document.quiz.reponse3.value;
    var r4 = document.quiz.reponse4.value;
    var r5 = document.quiz.reponse5.value;
    var r6 = document.quiz.reponse6.value;
    var r7 = document.quiz.reponse7.value;
    var r8 = document.quiz.reponse8.value;
    var r9 = document.quiz.reponse9.value;
    var r10 = document.quiz.reponse10.value;

    var result = document.getElementById('result');

    if (r1 == "2 mai 2016"){c++}
    if (r2 == "Enfant"){c++}
    if (r3 == "13"){c++}
    if (r4 == "Lori"){c++}
    if (r5 == "Lisa"){c++}
    if (r6 == "Bobby"){c++}
    if (r7 == "Clyde"){c++}
    if (r8 == "Lola, Lana"){c++}
    if (r9 == "15 mois"){c++}
    if (r10 == "Vamps"){c++}

    result.textContent = `${"Votre score est de: " + c + "/10"}`;
}
