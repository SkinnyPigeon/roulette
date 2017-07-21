var assert = require( 'chai' ).assert;
var Table = require( '../models/table.js' );

describe( 'The Table: ', function() {

  beforeEach( function() {
    table = new Table();
  });

  it( "Should start with 37 numbers: ", function() {
    assert.equal( 37, table.countNumbers() );
  });

  it( "Should be able to show a number: ", function() {
    assert.equal( 0 , table.seeNumbers( 0 ) );
  });

});