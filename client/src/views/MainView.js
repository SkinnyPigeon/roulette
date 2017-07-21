var Table = require( '../models/table' );

var MainView = function() {
  this.start();
};

MainView.prototype = {

  start: function() {
    
    var table = new Table();
    var tableSpace = document.getElementById( 'table-space' );

    for( var i = 0; i < table.countNumbers(); i++ ) {
      var number = document.createElement( 'p' );
      number.innerText = table.seeNumbers( i );
      number.id = table.seeNumbers( i );
      number.onclick = function( e ) {
        this.selectNumber( e.target.id );
      }.bind( this );
      tableSpace.appendChild( number );
    }
  },

  selectNumber: function( id ) {
    console.log( id );
  }

};

module.exports = MainView;