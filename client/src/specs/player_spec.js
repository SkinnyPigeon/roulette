var assert = require( 'chai' ).assert;
var Player = require( '../models/player.js' );

describe( 'The player: ', function() {


  beforeEach( function() {
    player = new Player( "Jeff" );
  });

  it( "Should have a name: ", function() {
    assert.equal( "Jeff", player.name );
  });

  it( "Should have some chips: ", function() {
    assert.equal( 500, player.seeChips() );
  });

  it( "Should be able to gamble chips: ", function() {
    player.gamble( 10 );
    assert.equal( 490, player.seeChips() );
  });

  it( "Should be able to win chips: ", function() {
    player.win( 10 );
    assert.equal( 510, player.seeChips() );
  });

  it( "Should not be able to lose more chips than they have: ", function() {
    player.gamble( 505 );
    assert.equal( 500, player.seeChips() );
  });

})