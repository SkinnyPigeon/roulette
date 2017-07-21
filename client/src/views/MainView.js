var Table = require( '../models/table' );
var Wheel = require( '../models/wheel' );

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
    tableList.style.float = 'left';

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

    var twelvesList = document.createElement( 'ul' );
    twelvesList.style.float = 'left';
    var numberList = document.createElement( 'ul' );
    numberList.style.float = 'left';

    var firstTwelve = document.createElement( 'li' );
    var secondTwelve = document.createElement( 'li' );
    var thirdTwelve = document.createElement( 'li' );

    var odds = document.createElement( 'li' );
    var evens = document.createElement( 'li' );

    odds.innerText = 'Odds';
    evens.innerText = 'Evens';
    firstTwelve.innerText = 'First Twelve';
    secondTwelve.innerText = 'Second Twelve';
    thirdTwelve.innerText = 'Third Twelve';

    twelvesList.appendChild( firstTwelve );
    twelvesList.appendChild( secondTwelve );
    twelvesList.appendChild( thirdTwelve );
    numberList.appendChild( odds );
    numberList.appendChild( evens );

    tableSpace.appendChild( twelvesList );
    tableSpace.appendChild( numberList );
  },

  selectNumber: function( id ) {
    console.log( id );
  }

};

module.exports = MainView;