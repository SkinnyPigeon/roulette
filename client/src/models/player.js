var Player = function( name ) {
  this.name = name;
  this.chips = 500;
}

Player.prototype = {

  seeChips: function() {
    return this.chips;
  },

  gamble: function( bet ) {
    if( this.chipCheck( bet )) {
      this.chips -= bet;
      return bet;
    };
  },

  win: function( winnings ) {
    this.chips += winnings;
  },

  chipCheck: function( bet ) {
    if( bet < this.chips ) {
      return true;
    }
  }


}

module.exports = Player;