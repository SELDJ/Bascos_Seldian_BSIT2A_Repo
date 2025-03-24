console.log ('BattleShip Game');
// Declaring Variables
var randomLoc = Math.floor (Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;

var hits = 0;
var guesses = 0;

var isSunk = false;

// Game Logic
while (isSunk == false) {
    guess = prompt("Ready, Aim, Shoot! (Enter Number 0 - 6 🥳🫡)");

        if (guess < 0 || guess > 6 ) {
            alert("Please Enter Valid Number!");
        }

        if (guess == null) {
            alert('Thank you for Playing! 💕');
            break
        }

        else {
            guesses += 1;
            
            if (guess == location1 || guess == location2 || guess == location3) {
           
                hits += 1;
                alert("hit!🎯")
            if (hits == 3) {
                    
                    isSunk = true;
                    alert("You sank The Battleship! 🙄😒");

                }
            } else {
                alert("miss! 😝")
            }
        }


}

var accuracy = (guesses > 0 ? hits/guesses * 100 : 0) .toFixed(2);
var stats = "You sank my battleship at: " + guesses + " guesses" + " and you accuracy is: " + accuracy + '%';

alert(stats);