// Input

var km = parseInt(document.getElementById("km"));

var età = parseInt(document.getElementById("età"));

function submit(){
    var nome = document.getElementById("nome").value;
    document.getElementById("name").innerHTML = nome
}

var annulla = document.getElementById("annulla");
    annulla.addEventListener("click", function(){
    document.getElementById('name').innerHTML = '-';
});


var biglietto = 0.21 * km;

var scatola = biglietto;


// if else
if(età == minorenne){
    scatola = biglietto - (biglietto * 20) / 100;
    scatola = scatola.toFixed(2);
} else if(età == Over65){
    scatola = biglietto - (biglietto * 40) / 100;
    scatola = scatola.toFixed(2);
}

// risultato prezzo
document.getElementById('prezzo').innerHTML = scatola