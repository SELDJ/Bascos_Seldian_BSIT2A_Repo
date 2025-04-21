var randomloc = Math.floor(Math.random() * 5);
var shipLocations = [randomloc, randomloc, + 1, randomloc +2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt('Ready, Aim, Shoot! (Enter Number 0 - 6 🥳): ');

    if(guess === null) {
        alert('Thank you for Playing! 💕');
        break;
    }

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert('Kindly enter a number in the range of 0 - 6!: ');
        continue;

    }

    guesses++;

    const hitIndex =  shipLocations.indexOf(guess);

    if (hitIndex !== -1) {
        alert('Hit!✔');
        shipLocations.splice(hitIndex, 1);
        hits++;
        if (shipLocations.length === 0) {
            isSunk = true;
        }
    } else {
        alert('Miss!❌');
    }
}

var accuracy = (guesses > 6 ? (hits /  guesses) * 100 : 0) .toFixed(2);

var stats = 'You took ' + guesses + ' guesses to sink the battleship!\n' + 'Accuracy: ' + accuracy + '%';

alert(stats)