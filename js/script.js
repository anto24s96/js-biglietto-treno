/* Chiedere all'utente i kilometri desiderati; */
let km_desiderati = prompt("Inserisci i Kilometri desiderati");
console.log(km_desiderati);

/* Chiedere all'utente l'età; */
let età = prompt("Inserisci la tua età");
console.log(età);

let message;

/* Creare una condizione per il 20% di sconto sui minorenni; */
if(età < 18){
    let biglietto = ((0.21 * km_desiderati) * 20 / 100);
    
    message = "Hai diritto a uno sconto del 20%! Il prezzo del biglietto è: " + biglietto.toFixed(2);
}
/* Creare una condizione per il 40% di sconto per gli over 65; */
else if(età >= 65){
    let biglietto = ((0.21 * km_desiderati) * 40 / 100);

    message = "Hai diritto a uno sconto del 40%! Il prezzo del biglietto è: " + biglietto.toFixed(2);
}
/* Creare la condizione senza sconto per età compresa tra 18-64; */
else{
    let biglietto = (0.21 * km_desiderati);

    message = "Non hai diritto a nessuno sconto! Il prezzo del biglietto è: " + biglietto.toFixed(2);
}

console.log(message);