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

    if (r1 == "27 nov. 2013"){c++}
    if (r2 == "Le bonhomme de neige"){c++}
    if (r3 == "Arendelle"){c++}
    if (r4 == "Blanche"){c++}
    if (r5 == "Disparu en bâteau"){c++}
    if (r6 == "Anna"){c++}
    if (r7 == "Reine Iduna"){c++}
    if (r8 == "Le duc de Weselton"){c++}
    if (r9 == "Grand Pabbie"){c++}
    if (r10 == "Sven"){c++}

    result.textContent = `${"Votre score est de: " + c + "/10"}`;
}
