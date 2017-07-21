var Table = require( '../models/table' );

var MainView = function() {
  this.start();
};

MainView.prototype = {

  start: function() {

    var table = new Table();
    var tableSpace = document.getElementById( 'table-space' );

    var tableList = document.createElement( 'ul' );
    tableList.style.display = 'table';
    tableList.style.maxWidth = '100%';
    tableList.style.textAlign = 'center';

    for( var i = 0; i < table.allRows.length; i++ ) {

      var row = document.createElement( 'ul' );
      row.style.width = '100%';
      row.style.display = 'table';
      row.style.textAlign = 'center';

      for( var j = 0; j < table.seeRow( i ).length; j++ ) {
        var number = document.createElement( 'li' );

        number.style.display = 'inline';
        number.innerText = table.seeRow( i )[ j ];
        number.id = table.seeRow( i )[ j ];
        number.onclick = function( e ) {
          this.selectNumber( e.target.id );
        }.bind( this );
        row.appendChild( number );
      }
      tableList.appendChild( row );
    }
    tableSpace.appendChild( tableList );
  },

  selectNumber: function( id ) {
    console.log( id );
  }

};

module.exports = MainView;