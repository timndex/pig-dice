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

function Player(playerName, score, turnScore, roll) {
  this.playerName = playerName;
  this.score = score;
  this.turnScore = turnScore;
  this.roll =0;
  this.turn = turn;
}
// turnScore refers to the total amount of points added from several rollsof the dice
//score refers to total score
Player.prototype.rollone = function() {
  if(this.roll ==1){
    this.turnScore =0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
    this.turnScore += this.roll;
  }
}
//hold
Player.prototype.hold = function(){
  this.score += this.turnScore;
  this.score = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}
//check for 100
player.prototype.winner = function() {
  if(this.score >= 100){
    alert(this.playerName + ", you have won!" + "(" + this.score + "points!)" +"Press 'New game'.")
  }
}




// User Interface
$(document).ready(function() {
  $("form#start").click(function(event){
    event.preventDefault();
    player1 =new Player($("#playerOne").val(), 0);
    player2 =new Player($("#playerTwo").val(), 0);
    $("#playerOneName").append("<br>" + "<span>" + player1.name + "</span>");
     $("#playerTwoName").append("<br>" + "<span>" + player2.name + "</span>");
    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });

    $(".reset").click(function(event) {
    event.preventDefault();
    $(".player1").val("");
    $(".player2").val("");
