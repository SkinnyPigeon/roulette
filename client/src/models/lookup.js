var Lookup = function( betToCheck ) {
  this.betToCheck = betToCheck;
  this.multiplication = 0;
}

Lookup.prototype = {

  seeBetToCheck: function() {
    return this.betToCheck;
  },

  getMultiplication: function() {
    switch( this.betToCheck ) {
      case 2:
        this.multiplication = 17;
        break;
    }
    return this.multiplication;
  }
}

module.exports = Lookup;