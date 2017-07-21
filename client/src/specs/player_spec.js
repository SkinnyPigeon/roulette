var assert = require( 'chai' ).assert;
var Player = require( '../models/player.js' );

describe( 'The Player: ', function() {

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
    player.placeBet( 10 );
    assert.equal( 490, player.seeChips() );
  });

  it( "Should be able to win chips: ", function() {
    player.win( 10 );
    assert.equal( 510, player.seeChips() );
  });

  it( "Should not be able to lose more chips than they have: ", function() {
    player.placeBet( 505 );
    assert.equal( 500, player.seeChips() );
  });

  it( "Should be able to know what its last bet is: ", function() {
    player.placeBet( 10 );
    assert.equal( 10, player.seeLastBet() );
  });

  it( "Should be able to multiply the last bet: ", function() {
    player.placeBet( 10 );
    player.multiplyWinnings( 5 );
    assert.equal( 50, player.seeLastBet() );
  });

  it( "Should receive the multiplied winnings: ", function() {
    player.placeBet( 10 );
    player.multiplyWinnings( 2 );
    assert.equal( 510, player.seeChips() );
  });

  it( "Should start a round with no numbers selected: ", function() {
    assert.deepEqual( [], player.seeNumbers() );
  });

  it( "Should be able to place chip on single number: ", function() {
    player.pickNumber( 1 );
    assert.deepEqual([ 1 ], player.seeNumbers() );
  });

  it( "Should be able to place chip on multiple numbers: ", function() {
    player.pickNumber( 1 );
    player.pickNumber( 2 );
    assert.deepEqual([ 1, 2 ], player.seeNumbers() );
  });

  it( "Should be able to pick ranges of numbers: ", function() {
    player.pickNumber([ 1, 2 ]);
    assert.deepEqual([[ 1, 2 ]], player.seeNumbers() );
  });

  it( "Should be able to know the length of a single number: ", function() {
    player.pickNumber( 1 );
    assert.deepEqual([ 1 ], player.countNumbers() );
  });

  it( "Should be able to know the length of multiple numbers: ", function() {
    player.pickNumber([ 1, 2 ]);
    assert.deepEqual([ 2 ], player.countNumbers() );
  });

  it( "Should be able to know the length of all the numbers: ", function() {
    player.pickNumber( 1 );
    player.pickNumber([ 2, 3 ]);
    assert.deepEqual([ 1, 2 ], player.countNumbers() );
  });

  it( "Should be able to work out the odds and win: ", function() {
    player.pickNumber( 1 );
    player.placeBet( 10 );
    player.gamble( true );
    assert.equal( 850, player.seeChips() );
  });

  it( "Should be able to work out the odds and win for other bets: ", function() {
    player.pickNumber( 1 );
    player.placeBet( 10 );
    player.pickNumber([ 2, 3 ]);
    player.placeBet( 10 );
    player.gamble( true );
    assert.equal( 1020, player.seeChips() );
  });

});