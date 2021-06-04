var km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

// età
var età = parseInt(prompt('Quanti anni hai?'));

// operazione prezzo
var biglietto = 0.21 * km;

var scatola = biglietto;

// if else
if(età < 18){
    scatola = biglietto - (biglietto * 20) / 100;
    scatola = scatola.toFixed(2);
} else if(età > 65){
    scatola = biglietto - (biglietto * 40) / 100;
    scatola = scatola.toFixed(2);
}

// risultato prezzo
console.log('scatola');