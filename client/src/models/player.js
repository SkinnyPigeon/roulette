var Player = function( name ) {
  this.name = name;
  this.chips = 500;
}

Player.prototype = {

  seeChips: function() {
    return this.chips;
  },

  gamble: function( bet ) {
    this.chips -= bet;
    return bet;
  }


}

module.exports = Player;