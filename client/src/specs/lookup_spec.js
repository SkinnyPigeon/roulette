var assert = require( 'chai' ).assert;
var Lookup = require( '../models/lookup.js' );

describe( 'The Lookup: ', function() {

  beforeEach( function() {
    lookup = new Lookup();
  });

  it( "Should start with all the odds: ", function() {
    assert.equal( 7, lookup.countNoOfOdds() );
  });


});