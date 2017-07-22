var _ = require( 'lodash' );

var Wheel = function() {

  this.green =  [ 0 ];
  this.red =    [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
  this.black =  [ 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35 ];
  this.allNumbers = [   this.green[0],  this.red[15], this.black[7],  this.red[9], 
                        this.black[1],  this.red[10], this.black[0],  this.red[12],
                        this.black[8],  this.red[16], this.black[2],  this.red[13],
                        this.black[6],  this.red[17], this.black[5],  this.red[14],
                        this.black[3],  this.red[11], this.black[4],  this.red[2],
                        this.black[11], this.red[7],  this.black[16], this.red[0],
                        this.black[9],  this.red[6],  this.black[15], this.red[4],
                        this.black[10], this.red[8],  this.black[14], this.red[3],
                        this.black[13], this.red[5],  this.black[17], this.red[1],
                        this.black[12] ];
  this.spinCount = 0;
}

Wheel.prototype = {

  getNumber: function( index ) {
    return this.allNumbers[ index ];
  },

  chooseRandomIndex: function() {
    return _.random( 0, this.allNumbers.length );
  },

  rotateArray: function() {
    var spunWheel = this.allNumbers.push( this.allNumbers.shift() );
    return spunWheel;
  },

  spin: function() {
    var index = this.chooseRandomIndex();
    while( this.spinCount < 100 ) {
      console.log( 'hello' );
    }
  },

}

module.exports = Wheel;