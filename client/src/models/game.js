var _ = require( 'lodash' );

var Game = function() {
  this.players = [];
  this.newPlayerID = 1;
}

Game.prototype = {

  noOfPlayers: function() {
    return this.players.length;
  },

  addPlayer: function( player ) {
    player.id = this.newPlayerID;
    this.newPlayerID += 1;
    this.players.push( player );
  },

  seeNewPlayerID: function() {
    return this.newPlayerID;
  }

}

module.exports = Game;