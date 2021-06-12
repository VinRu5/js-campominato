//Creo una funziona per generare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//elemento html per lo score
var output = document.getElementsByClassName('output')[0];

//elemento html per i button
var boxElement = document.getElementsByClassName('box');

//elemento html per i messaggi
var messageElement = document.getElementsByClassName('message')[0];

//elemento html box per i messaggi
var messageBoxElement = document.getElementsByClassName('message-box')[0];

//elemento html box per lo score
var boxScoreElement = document.getElementsByClassName('result')[0];

var numberOfBox = 96;

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
//e li associo in modo randomico 
//ai button
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


for (var x = 0; x < boxElement.length; x++) {

    //al click verifico che non ci sia la mina
    boxElement[x].addEventListener('click', function () {
        
        //colore del button positivo
        this.style.background = '#6aa121';

        var check = parseInt(this.value);
        console.log(check);

        if (computerNumbers.includes(check)) {
            this.style.background = '#ff5349';

            //creare un avviso per dichirare la partita persa
            messageElement.innerHTML = 'HAI PERSO!';
            messageBoxElement.classList.remove('d-none');

            //se becchi la mina non è possibile cliccare sui button
            for (var i = 0; i < boxElement.length; i++) {
                boxElement[i].disabled = true;
            }
            
            //window.location.reload();
        } else {

            if (!userNumbers.includes(check)){
                userNumbers.push(check);
            }
        }
        
        var result = userNumbers.length;
        output.innerHTML = result;
    })
}

boxScoreElement.classList.remove('color');




