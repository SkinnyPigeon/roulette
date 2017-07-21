var Lookup = function( betToCheck ) {
  this.betToCheck = betToCheck;
  this.oddsList =   [ 1, 2, 5, 8, 11, 17, 35 ];
}

Lookup.prototype = {

  countNoOfOdds: function() {
    return this.oddsList.length;
  },

  seeBetToCheck: function() {
    return this.betToCheck;
  }
}

module.exports = Lookup;