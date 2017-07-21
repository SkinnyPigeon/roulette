var Player = function( name ) {
  this.name = name;
  this.chips = 500;
  this.id = 0;
  this.bet = 0;
}

Player.prototype = {

  seeChips: function() {
    return this.chips;
  },

  gamble: function( bet ) {
    if( this.chipCheck( bet )) {
      this.bet = bet;
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
  },

  seeID: function() {
    return this.id;
  },

  seeLastBet: function() {
    return this.bet;
  }

}

module.exports = Player;