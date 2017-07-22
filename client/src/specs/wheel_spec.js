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
    assert.equal( 32, number );
  });

  // it( "Should be able to spin and finish on the random index: ", function() {
  //   wheel.spinStart()
  //   var number = wheel.getNumber(0);
  //   assert.equal( 0, number );
  // })

});