var Lookup = function() {
  this.oddsList =   [ 1, 2, 5, 8, 11, 17, 35 ];
}

Lookup.prototype = {

  countNoOfOdds: function() {
    return this.oddsList.length;
  }
}

module.exports = Lookup;