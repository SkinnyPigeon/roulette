var assert = require( 'chai' ).assert;
var Player = require( '../models/player.js' );
var Game = require( '../models/game.js' );

describe( 'The Game: ', function() {

  beforeEach( function() {
    game = new Game();
    player = new Player( "Jeff" );
  });

  it( "Should have start with no players: ", function() {
    assert.equal( 0, game.noOfPlayers() );
  });

});