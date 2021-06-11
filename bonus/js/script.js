//Creo una funziona per generare numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var output = document.getElementsByClassName('output')[0];

var boxElement = document.getElementsByClassName('box');



var computerNumbers = [];
//Devo far scegliere al pc 16 numeri cuasali
while (computerNumbers.length < 16) {

    //estraggo il numero
    var drawNumber = getRandomNumber(1, 24);

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
while (i <= 24) {
    var randomNumb = getRandomNumber(1, 24);
    var randomIndex = randomNumb - 1;

    if (!boxNum.includes(randomNumb)) {
        boxElement[randomIndex].value = i;
        boxNum.push(randomNumb);
        i++;
    }
}


for (var x = 0; x < boxElement.length; x++) {

    boxElement[x].addEventListener('click', function () {
        this.style.background = 'green';

        var check = parseInt(this.value);
        console.log(check);

        //debugger;
        if (computerNumbers.includes(check)) {
            alert('hai beccato la mina');
            this.style.background = 'red';
        } 
    })
}


