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
      case 1:
        this.multiplication = 35;
        break;
      case 2:
        this.multiplication = 17;
        break;
      case 3:
        this.multiplication = 11;
        break;
      case 4:
        this.multiplication = 8;
        break;
      case 6:
        this.multiplication = 5;
        break;
      case 12:
        this.multiplication = 2;
        break;
      case 18:
        this.multiplication = 1;
        break;
    }
    return this.multiplication;
  }
}

module.exports = Lookup;