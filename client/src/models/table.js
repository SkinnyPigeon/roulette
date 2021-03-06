var Table = function() {

  this.numbers =  [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,  
                    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                    30, 31, 32, 33, 34, 35, 36 ];

  this.row0 =   [       '00'       ];
  this.row1 =   [ '01', '02', '03' ];
  this.row2 =   [ '04', '05', '06' ];
  this.row3 =   [ '07', '08', '09' ];
  this.row4 =   [ '10', '11', '12' ];
  this.row5 =   [ '13', '14', '15' ];
  this.row6 =   [ '16', '17', '18' ];
  this.row7 =   [ '19', '20', '21' ];
  this.row8 =   [ '22', '23', '24' ];
  this.row9 =   [ '25', '26', '27' ];
  this.row10 =  [ '28', '29', '30' ];
  this.row11 =  [ '31', '32', '33' ];
  this.row12 =  [ '34', '35', '36' ];

  this.allRows = [  this.row0, this.row1, this.row2, this.row3,
                    this.row4, this.row5, this.row6, this.row7,
                    this.row8, this.row9, this.row10, this.row11, 
                    this.row12 ]
}

Table.prototype = {

  countNumbers: function() {
    return this.numbers.length;
  },

  seeNumbers: function( index ) {
    return this.numbers[ index ];
  },

  seeRow: function( index ) {
    return this.allRows[ index ];
  }

}

module.exports = Table;