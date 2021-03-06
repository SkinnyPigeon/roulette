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

  it( "Should be able to add players: ", function() {
    game.addPlayer( player );
    assert.equal( 1, game.noOfPlayers() );
  });

  it( "Should iterate player ID on adding player: ", function() {
    game.addPlayer( player );
    assert.equal( 2, game.seeNewPlayerID() );
  });

  it( "Should assign the player an ID: ", function() {
    game.addPlayer( player );
    assert.equal( 1, player.seeID() );
  });

});