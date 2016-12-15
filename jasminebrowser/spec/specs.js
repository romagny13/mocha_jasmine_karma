/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	describe("Hash", function () {

		var HashHistory = __webpack_require__(1).HashHistory;

		beforeEach(function () {});

		it("should work", function () {

			var hasHistory = new HashHistory(function (url) {
				expect(url).toBe("/posts");
			});

			hasHistory.go("/posts");
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HashHistory = HashHistory;
	function HashHistory(onChange) {
		var self = this;

		this.go = function (url, replace) {
			if (replace) {
				location.replace("#" + url);
			} else {
				location.hash = url;
			}
		};

		//	this.back = function () {
		//		history.back();
		//	};
		//
		//	this.forward = function () {
		//		history.forward();
		//	};

		window.onhashchange = function () {
			var shortUrl = location.hash === "" ? "/" : location.hash.substring(1);
			onChange(shortUrl);
		};
	}

	//function HashHistory (onChange) {
	//	var self = this;
	//
	//	this.go = function (url,replace) {
	//		if(replace){
	//			location.replace("#" + url);
	//		}
	//		else {
	//			location.hash = url;
	//		}
	//		//onChange(url);
	//	};
	//
	//	//	this.back = function () {
	//	//		history.back();
	//	//	};
	//	//
	//	//	this.forward = function () {
	//	//		history.forward();
	//	//	};
	//
	//	window.onhashchange = function () {
	//		var shortUrl = location.hash === "" ? "/" : location.hash.substring(1);
	//		onChange(shortUrl);
	//	};
	//}
	//
	//module.exports = {
	//	HashHistory:HashHistory
	//}

/***/ }
/******/ ]);