var assert = require( 'chai' ).assert;
var Lookup = require( '../models/lookup.js' );

describe( 'The Lookup: ', function() {

  beforeEach( function() {
    lookup = new Lookup( 2 );
  });

  it( "Should start with all the odds: ", function() {
    assert.equal( 7, lookup.countNoOfOdds() );
  });

  it( "Should know the bet to check: ", function() {
    assert.equal( 2, lookup.seeBetToCheck() );
  })


});