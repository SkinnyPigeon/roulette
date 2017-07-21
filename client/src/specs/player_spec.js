var assert = require( 'chai' ).assert;
var Player = require( '../models/player.js' );

describe( 'The refugees: ', function() {


  beforeEach( function() {
    player = new Player( "Jeff" )
  });

  it( "Should have a name", function() {
    assert.equal( "Jeff", player.name )
  });

  it( "Should have some chips", function() {
    assert.equal( 500, player.showChips() )
  });

})