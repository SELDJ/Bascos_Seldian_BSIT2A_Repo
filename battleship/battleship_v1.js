console.log ('BattleShip Game');
// Declaring Variables
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;

var hits = 0;
var guesses = 0;

var isSunk = false;

// Game Logic
while (isSunk == false) {
    guess = prompt("Ready, Aim, Fire! (Enter Number 0-6🥳🫡)")

        if (guess < 0 || guess > 6 ) {
            alert("Please Enter Valid Number!")
        }

        else {
            guesses += 1;
            
            if (guess == location1 || guess == location2 || guess == location3) {
           
                hits += 1;
                alert("hit!🎯")
            if (hits == 3) {
                    
                    isSunk = true;
                    alert("You sank The Battleship!🙄😒")

                }
            } else {
                alert("miss!😝")
            }
        }


}

var stats = "You sank my battleship at: " + guesses + "guesses" + "and you accuracy is: " + (3/guesses);

alert(stats);