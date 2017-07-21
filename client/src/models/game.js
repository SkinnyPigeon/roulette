var Game = function() {
  this.players = [];
}

Game.prototype = {

  noOfPlayers: function() {
    return this.players.length;
  },

  addPlayer: function( player ) {
    this.players.push( player )
  },

}

module.exports = Game;