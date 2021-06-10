/*
Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
*/

 
//Creo una funziona per generare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creo una funzione per verificare un valore all'interno di un array
function checkArray(array, element) {

    for (x = 0; x < array.length; x++) {
        if (element === array[x]) {
            return true;
        }
    }

    return false;
}

//ho bisogno di salvare i numeri per verificarli a tal scopo
//genero un array dei numeri del pc
var computerNumbers = [];

//genero un array dei numeri dell'utente 
var userNumbers = [];

//inserisco una variabile per decidere il livello del gioco;
var gameLivel = 100;

//Devo far scegliere al pc 16 numeri cuasali
while (computerNumbers.length < 16) {

    //estraggo il numero
    var drawNumber = getRandomNumber(1, gameLivel);

    //verifico che sia contenuto nell'array
    if (!checkArray(computerNumbers, drawNumber)) {
        computerNumbers.push(drawNumber);
    }
  
}
    console.log(computerNumbers);