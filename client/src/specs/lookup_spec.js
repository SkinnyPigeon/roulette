var assert = require( 'chai' ).assert;
var Lookup = require( '../models/lookup.js' );

describe( 'The Lookup: ', function() {

  beforeEach( function() {
    lookup = new Lookup( 2 );
  });

  it( "Should know the bet to check: ", function() {
    assert.equal( 2, lookup.seeBetToCheck() );
  });

  it( "Should be able to return the multiplication for the bet: ", function() {
    assert.equal( 17, lookup.getMultiplication() );
  });


});