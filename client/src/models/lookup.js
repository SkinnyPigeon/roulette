var Lookup = function( betToCheck ) {
  this.betToCheck = betToCheck;
}

Lookup.prototype = {

  seeBetToCheck: function() {
    return this.betToCheck;
  }
}

module.exports = Lookup;