import { hozzaad, atlag } from "./lista.js";

let gomb = document.getElementById("hozzaad");
gomb.addEventListener("click", function () {
    let szam = document.getElementById("szam");
    hozzaad(parseInt(szam.value));
    alert('Átlag: ' + atlag());
})