//Creo una funziona per generare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var output = document.getElementsByClassName('output')[0];

var boxElement = document.getElementsByClassName('box');

var numberOfBox = 96

var computerNumbers = [];
//Devo far scegliere al pc 16 numeri cuasali
while (computerNumbers.length < 16) {

    //estraggo il numero
    var drawNumber = getRandomNumber(1, numberOfBox);

    //verifico che sia contenuto nell'array
    if (!computerNumbers.includes(drawNumber)) {
        computerNumbers.push(drawNumber);
    }

}

//prendo i numeri dell'array 
//for array[x] 
//e li associo in modo randomico 
//randomNum = button[x]--> button[randomNum]
//ai button
//button[randomNum].value = array[x];
var i = 1;
var boxNum = [];
while (i <= numberOfBox) {
    var randomNumb = getRandomNumber(1, numberOfBox);
    var randomIndex = randomNumb - 1;

    if (!boxNum.includes(randomNumb)) {
        boxElement[randomIndex].value = i;
        boxNum.push(randomNumb);
        i++;
    }
}

//creo array per caricare il punteggio dell'utente
var userNumbers = [];
output.innerHTML = 'il tuo punteggio è 0';

for (var x = 0; x < boxElement.length; x++) {

    //al click verifico che non ci sia la mina
    boxElement[x].addEventListener('click', function () {
        this.style.background = 'green';

        var check = parseInt(this.value);
        console.log(check);

        if (computerNumbers.includes(check)) {
            this.style.background = 'red';
            //alert('hai beccato la mina');
            //window.location.reload();
        } else {
            userNumbers.push(check);
        }
        // TODO: come uscire dal ciclo se becco la mina?
        var result = userNumbers.length;
        output.innerHTML = 'il tuo punteggio è ' + result;
    })
}



