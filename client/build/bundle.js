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
	
	var MainView = function() {
	  this.start();
	};
	
	MainView.prototype = {
	
	  start: function() {
	
	    var table = new Table();
	    var tableSpace = document.getElementById( 'table-space' );
	
	    for( var i = 0; i < table.countNumbers(); i++ ) {
	      var number = document.createElement( 'p' );
	      number.innerText = table.seeNumbers( i );
	      number.id = table.seeNumbers( i );
	      number.onclick = function( e ) {
	        this.selectNumber( e.target.id );
	      }.bind( this );
	      tableSpace.appendChild( number );
	    }
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
	
	}
	
	Table.prototype = {
	
	  countNumbers: function() {
	    return this.numbers.length;
	  },
	
	  seeNumbers: function( index ) {
	    return this.numbers[ index ];
	  }
	
	}
	
	module.exports = Table;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map