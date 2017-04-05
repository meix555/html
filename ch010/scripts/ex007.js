/**
 * Created by meix on 05.04.17.
 */

function machWas() {

    var zahl = document.getElementById("zahl").value;

    var primfaktoren = primfaktorenBerechnen(zahl);
    document.getElementById("primfaktorzerlegung").innerHTML = primfaktoren;

    var primfaktorenSumme = berechnePrimfaktorenSumme(zahl);
    document.getElementById("summe").innerHTML = primfaktorenSumme;
}

    function primfaktorenBerechnen(zahl) {

        var primfaktoren = [];

        var teiler = 2;
        while (teiler <= zahl) {

            if (!(zahl % teiler)) {
                primfaktoren.push(teiler);
                zahl = Math.floor(zahl / teiler);
            } else {
                teiler++;
            }

        }

        return primfaktoren;
    }

    function berechnePrimfaktorenSumme(zahl) {

        var summe = 0;
        var neueSumme = 0;

        do {
            summe = neueSumme;
            neueSumme = 0;
            var primfaktoren = primfaktorenBerechnen(zahl);

            for(var i = 0; i < primfaktoren.length; i++) {
                neueSumme += primfaktoren[i];
            }
            zahl = neueSumme;
        } while (summe !== neueSumme);

        return summe;
    }