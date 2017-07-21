var Table = require( '../models/table' );

var MainView = function() {
  this.start();
};

MainView.prototype = {

  start: function() {
    console.log( "Hello World" );
    var table = new Table();
    console.log( table.countNumbers() );
  },

};

module.exports = MainView;