var Player = function( name ) {
  this.name = name;
  this.chips = 500;
}

Player.prototype = {

  showChips: function() {
    return this.chips;
  }
}

module.exports = Player;