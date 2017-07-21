var Lookup = require( './lookup.js' );

var Player = function( name ) {
  this.name = name;
  this.chips = 500;
  this.id = 0;
  this.bets = [];
  this.numbers = [];
  this.odds = [];
}

Player.prototype = {

  seeChips: function() {
    return this.chips;
  },

  placeBet: function( bet ) {
    if( this.chipCheck( bet )) {
      this.bets.push( bet );
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
    for( var i = 0; i < this.bets.length; i++ ) {
      return this.bets[i];
    }
  },

  multiplyWinnings: function( multiplication ) {
    for( var i = 0; i < this.bets.length; i++ ) {
      this.bets[i] *= multiplication;
      this.win( this.bets[i] );
    }
  },

  seeNumbers: function() {
    return this.numbers;
  },

  pickNumber: function( number ) {
    this.numbers.push( number );
  },

  countNumbers: function() {
    for( var i = 0; i < this.numbers.length; i++ ) {
      if( !Array.isArray( this.numbers[i] )) {
        var single = this.numbers[i].toString();
        this.odds.push( single.length );
      } else {
        var count = this.numbers[i].length;
        this.odds.push( count );
      }
    } 
    return this.odds;
  },

  gamble: function( win ) {
    if( win ) {
      this.countNumbers();
      for( var i = 0; i < this.odds.length; i++ ) {
        var lookup = new Lookup( this.odds[i] );
        var multiplication = lookup.getMultiplication();
        this.win( this.bets[i] );
        this.bets[i] *= multiplication;
        this.win( this.bets[i] );
      }
    }
  }

}

module.exports = Player;