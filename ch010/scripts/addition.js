/**
 * Created by meix on 30.03.17.
 */

function addiere() {

    var formel = document.getElementById("formel-input").value;
    var plusIndex = formel.indexOf("+");
    var summand1 = parseInt(formel.substring(0, plusIndex));
    var summand2 = parseInt(formel.substring(plusIndex+1));

    document.getElementById("ergebnis").innerHTML = (summand1 + summand2).toString();
}

