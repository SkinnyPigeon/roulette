var assert = require( 'chai' ).assert;
var Wheel = require( '../models/wheel.js' );

describe( 'The Wheel: ', function() {

  beforeEach( function() {
    wheel = new Wheel();
  });

  it( "Should have a number: ", function() {
    var number = wheel.getNumber(0);
    assert.equal( 0, number );
  });

  it( "Should be able to spin the wheel: ", function() {
    wheel.rotateArray();
    var number = wheel.getNumber(0);
    assert.equal( 32x, number );
  });

});