/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var MainView = __webpack_require__( 1 );
	
	window.onload = function() {
	  main();
	}
	
	var main = function() {
	  var mainView = new MainView();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Table = __webpack_require__( 2 );
	var Wheel = __webpack_require__( 3 );
	
	var MainView = function() {
	  this.start();
	};
	
	MainView.prototype = {
	
	  start: function() {
	
	    var table = new Table();
	    var tableSpace = document.getElementById( 'table-space' );
	
	    var tableList = document.createElement( 'ul' );
	    tableList.style.display = 'table';
	    tableList.style.maxWidth = '100%';
	    tableList.style.textAlign = 'center';
	    tableList.style.float = 'left';
	
	    for( var i = 0; i < table.allRows.length; i++ ) {
	
	      var row = document.createElement( 'ul' );
	      row.style.width = '100%';
	      row.style.display = 'table';
	      row.style.textAlign = 'center';
	
	      for( var j = 0; j < table.seeRow( i ).length; j++ ) {
	        var number = document.createElement( 'li' );
	        number.style.display = 'inline';
	        number.innerText = table.seeRow( i )[ j ];
	        number.id = table.seeRow( i )[ j ];
	        number.onclick = function( e ) {
	          this.selectNumber( e.target.id );
	        }.bind( this );
	        row.appendChild( number );
	      }
	      tableList.appendChild( row );
	    }
	    tableSpace.appendChild( tableList );
	
	    var twelvesList = document.createElement( 'ul' );
	    twelvesList.style.float = 'left';
	    var numberList = document.createElement( 'ul' );
	    numberList.style.float = 'left';
	
	    var firstTwelve = document.createElement( 'li' );
	    var secondTwelve = document.createElement( 'li' );
	    var thirdTwelve = document.createElement( 'li' );
	
	    var odds = document.createElement( 'li' );
	    var evens = document.createElement( 'li' );
	
	    odds.innerText = 'Odds';
	    evens.innerText = 'Evens';
	    firstTwelve.innerText = 'First Twelve';
	    secondTwelve.innerText = 'Second Twelve';
	    thirdTwelve.innerText = 'Third Twelve';
	
	    twelvesList.appendChild( firstTwelve );
	    twelvesList.appendChild( secondTwelve );
	    twelvesList.appendChild( thirdTwelve );
	    numberList.appendChild( odds );
	    numberList.appendChild( evens );
	
	    tableSpace.appendChild( twelvesList );
	    tableSpace.appendChild( numberList );
	  },
	
	  selectNumber: function( id ) {
	    console.log( id );
	  }
	
	};
	
	module.exports = MainView;

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Wheel = function() {
	
	}
	
	Wheel.prototype = {
	  
	}
	
	module.exports = Wheel;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map