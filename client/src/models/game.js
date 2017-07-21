var Game = function() {
  this.players = [];
}

Game.prototype = {

  noOfPlayers: function() {
    return this.players.length;
  }

}

module.exports = Game;