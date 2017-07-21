var assert = require( 'chai' ).assert;
var Table = require( '../models/table.js' );

describe( 'The Table: ', function() {

  beforeEach( function() {
    table = new Table();
  });

  it( "Should start with 37 numbers: ", function() {
    assert.equal( 37, table.countNumbers() );
  });

  it( "Should be able to show all numbers: ", function() {
    assert.deepEqual( [  0,  1,  2,  3,  4,  5,  
                         6,  7,  8,  9, 10, 11, 
                        12, 13, 14, 15, 16, 17, 
                        18, 19, 20, 21, 22, 23, 
                        24, 25, 26, 27, 28, 29,
                        30, 31, 32, 33, 34, 35, 
                        36 ], table.seeNumbers() );
  });

});