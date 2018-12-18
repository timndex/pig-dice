/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//business logic
var rolldice = function () {
   return Math.floor(Math.random() * 6) + 1;
   }

function Player(playerName, score, turnScore, roll) {
  this.playerName;
  this.score = score;
  this.turnScore = turnScore;
  this.roll =0;
}
// turnScore refers to the total amount of points added from several rollsof the dice
//score refers to total score
Player.prototype.rollone = function() {
  if(this.roll == 1){
    this.turnScore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
    this.turnScore += this.roll;
  }
}
//hold
Player.prototype.hold = function(){
  this.score += this.turnScore;
  this.turnScore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}
//check for 100
player.prototype.winner = function() {
  if(this.score >= 100){
    alert(this.playerName + ", you have won!" + "(" + this.score + "points!)" +"Press 'New game'.")
  }
}
Player.prototype.newGame = function() {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playername = ('');
}




// User Interface
$(document).ready(function() {
  $("form#players").submit(function(event){
    event.preventDefault();
    player1 =new Player();
    player2 =new Player());
    var playerOne =$("input#playerOne").val();
    var playerTwo =$("input#playerOne").val();
    $(#player1).text(player1);
    $(#player2).text(player2);
    $("#players").hide();
    $("pig-dice").show();
    player1.playerName = playerOne;
    player2.playerName = playerTwo;
  });

    $(".reset").click(function(event) {
      p1.reset();
      p2.reset();
      $("#players").show();
      $(".pig-dice").hide();
      $("input#playerOne").val("");
      $("input#playerTwo").val("");
      $(".player1").val("");
      $(".player2").val("");
  });
