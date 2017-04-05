/**
 * Created by meix on 05.04.17.
 */

function versteckeFehler() {

}

function schreibeFehler(meldung) {

}

function pruefeVorname() {

    var vorname = document.getElementById("vorname").value;

    if (vorname === "") {
        schreibeFehler("Bitte geben Sie einen Vornamen ein!");
    } else if (vorname === "Klausi") {
        schreibeFehler("Klausi mögen wir nicht!")
    }
}

function pruefeNachname() {

    var nachname = document.getElementById("nachname").value;

    if (nachname === "") {
        schreibeFehler("Bitte geben Sie einen Nachnamen ein!");
    }

}

function pruefeEmail() {

    var email = document.getElementById("email").value;

    if (email === "") {
        schreibeFehler("Bitte geben Sie eine Email ein!");
    }

}

function pruefeFormular() {
    pruefeVorname();
    pruefeNachname();
    pruefeEmail();
    schickeFormular();
}

function schickeFormular() {

}