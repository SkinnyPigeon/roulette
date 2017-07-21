var Player = function( name ) {
  this.name = name;
  this.chips = 500;
  this.id = 0;
  this.bet = 0;
  this.numbers = [];
  this.odds = [];
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
  },

  multiplyWinnings: function( multiplication ) {
    this.bet *= multiplication;
    this.win( this.bet );
  },

  seeNumbers: function() {
    return this.numbers;
  },

  pickNumber: function( number ) {
    this.numbers.push( number );
  },

  countNumbers: function() {
    var count = this.numbers.map( function( number ) {
      this.odds.push( number.toString().length );
    }.bind( this ));
    return this.odds;
  }

}

module.exports = Player;