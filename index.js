//Set variables for the two players
var playerOne = "Player One";
var playerTwo = "Player Two";

//Prompt the user to enter their own names for the two player variables
function changeNames() {
  playerOne = prompt("Enter Player 1's name.");
  playerTwo = prompt("Enter Player 2's name.");
  document.getElementById("player1").innerHTML = playerOne;
  document.getElementById("player2").innerHTML = playerTwo;
}

//Roll two random numbers between 1 and 6, show corresponding images on each dice, declare the winner depending on which is larger.
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .getElementById("dice1")
    .setAttribute("src", "images/Dice" + randomNumber1 + ".png");
  document
    .getElementById("dice2")
    .setAttribute("src", "images/Dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = playerOne + " wins!";
  } else {
    document.querySelector("h1").innerHTML = playerTwo + " wins!";
  }
}
