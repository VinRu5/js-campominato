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

//chiedo all'utente il livello di difficoltà che vuole eseguire
var chooseLevel = parseInt(prompt('Inserisci il livello di difficoltà: 0 1 2'));

//verifico che l'utente sia compreso in quelli indicati
while (isNaN(chooseLevel) || chooseLevel < 0 || chooseLevel > 2) {
    alert('Puoi inserire solo \"0 1 2\"');
    chooseLevel = parseInt(prompt('Inserisci il livello di difficoltà: 0 1 2'));
}

//decido il valore della variabile in base al livello del gioco;
switch (chooseLevel) {
    case 0:
        var gameLevel = 100;
        break;

    case 1:
        var gameLevel = 80;
        break;

    case 2:
        var gameLevel = 50;
        break;
}

//Devo far scegliere al pc 16 numeri cuasali
while (computerNumbers.length < 16) {

    //estraggo il numero
    var drawNumber = getRandomNumber(1, gameLevel);

    //verifico che sia contenuto nell'array
    if (!checkArray(computerNumbers, drawNumber)) {
        computerNumbers.push(drawNumber);
    }
  
}

//creo delle stringhe per inserire i messaggi corretti in base alla difficoltà
var strInsertNum = 'Inserisci un numero da 1 a ' + gameLevel;
var strAlertNum = 'Puoi inserire solo numeri da 1 a ' + gameLevel;

//chiedere all'utente di inserire 84 numeri
while (userNumbers.length < (gameLevel - 16)) {
    var userNum = parseInt(prompt(strInsertNum));
    
    //controllo che l'utente inserisca realmente un numero da 1 a 100
    while (isNaN(userNum) || userNum < 1 || userNum > gameLevel) {
        alert(strAlertNum);
        userNum = parseInt(prompt(strInsertNum));
    }

    //non può inserire più volte lo stesso numero (????)
    //verifico che il numero non sia nell'array
    if (!checkArray(userNumbers, userNum)) {
        //se non è nell'array(numero valido) verifico 
        //if is in computerNumbers
        if (checkArray(computerNumbers, userNum)){
            alert('Hai beccato la mina!!!');
            break;
        } else {
            userNumbers.push(userNum);
        }
    } else {
        alert('Numero già inserito. Inserisci un altro numero');
    }
}

//in caso di vittoria comunico la vittoria
if (userNumbers.length === (gameLevel - 16)) {
    alert('Hai vinto!!!');
}

var result = 'Il tuo punteggio finale è ' + userNumbers.length;
alert(result);