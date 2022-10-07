"use strict";

const myButton = document.getElementById('my_btn');

const calcoloPrezzo = function(){
let tariffa = 0.21;
let kmTotali = document.getElementById('km').value;
let eta = document.getElementById('anni_utente').value;
let prezzoBiglietto = kmTotali * tariffa;

if(eta < 18){
    prezzoBiglietto = (prezzoBiglietto * 0.8).toFixed(2);
    document.getElementById('prezzo_precedente').innerHTML = `Hai diritto ad uno sconto <span class="bonus">Under-18!</span>`;
    document.getElementById('prezzo_finale').innerHTML = `Il costo del tuo biglietto è: <span class="priceSpan">${prezzoBiglietto}€</span>`;
} else if (eta > 65){
    prezzoBiglietto = (prezzoBiglietto * 0.6).toFixed(2);
    document.getElementById('prezzo_precedente').innerHTML = `Hai diritto ad uno sconto <span class="bonus">Over-65!</span>`;
    document.getElementById('prezzo_finale').innerHTML = `Il costo del tuo biglietto è: <span class="priceSpan">${prezzoBiglietto}€</span>`;
} else {
    prezzoBiglietto = (prezzoBiglietto * 1).toFixed(2);
    document.getElementById('prezzo_finale').innerHTML = `Il costo del tuo biglietto è: <span class="priceSpan">${prezzoBiglietto}€</span>`;
}
}

myButton.addEventListener('click', calcoloPrezzo);











