/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player1="";
var player2="";
function rollDice() {
   return Math.floor(Math.random() * 6) + 1;
   }

function Player(playerName, score, turnScore) {
  this.playerName = playerName;
  this.score = score;
  this.turnScore = turnScore;
}
// turnScore refers to the total amount of points added from several rollsof the dice
//score refers to total score
Player.prototype. = function(diceValue) {
  if(dice)
}





// User Interface
$(document).ready(function() {
    $(".pig dice").show();
    $(".players-screen").hide();
  });

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
