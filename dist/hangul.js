(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["hangul"] = factory();
	else
		root["hangul"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _isHangul = __webpack_require__(3);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _initial = __webpack_require__(5);
	
	var _initial2 = _interopRequireDefault(_initial);
	
	var _vowel = __webpack_require__(7);
	
	var _vowel2 = _interopRequireDefault(_vowel);
	
	var _under = __webpack_require__(1);
	
	var _under2 = _interopRequireDefault(_under);
	
	var _hasUnder = __webpack_require__(9);
	
	var _hasUnder2 = _interopRequireDefault(_hasUnder);
	
	var _hasLastUnder = __webpack_require__(10);
	
	var _hasLastUnder2 = _interopRequireDefault(_hasLastUnder);
	
	var _formatNumber = __webpack_require__(11);
	
	var _formatNumber2 = _interopRequireDefault(_formatNumber);
	
	exports['default'] = {
	    is: _isHangul2['default'],
	    initial: _initial2['default'],
	    vowel: _vowel2['default'],
	    under: _under2['default'],
	    hasUnder: _hasUnder2['default'],
	    hasLastUnder: _hasLastUnder2['default'],
	    formatNumber: _formatNumber2['default']
	};
	
	String.prototype.isHangul = function (len) {
	    return (0, _isHangul2['default'])(this.toString(), len);
	};
	
	String.prototype.hangulInitial = function () {
	    return (0, _initial2['default'])(this.toString());
	};
	
	String.prototype.hangulVowel = function () {
	    return (0, _vowel2['default'])(this.toString());
	};
	
	String.prototype.hangulUnder = function () {
	    return (0, _under2['default'])(this.toString());
	};
	
	String.prototype.hasHangulUnder = function () {
	    return (0, _hasUnder2['default'])(this.toString());
	};
	
	String.prototype.hasLastHangulUnder = function () {
	    return (0, _hasLastUnder2['default'])(this.toString());
	};
	
	String.prototype.toHangulNumber = function (delimiter) {
	    return (0, _formatNumber2['default'])(this.toString(), delimiter);
	};
	
	Number.prototype.toHangul = function (delimiter) {
	    return (0, _formatNumber2['default'])(this.toString(), delimiter);
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _isHangul = __webpack_require__(3);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _varsFinalConsonants = __webpack_require__(4);
	
	var _varsFinalConsonants2 = _interopRequireDefault(_varsFinalConsonants);
	
	/**
	 * @description 한글 한문자에서 종성을 분리해서 가져온다
	 * @param {string} str 문자
	 * @return {string} 종성
	 */
	
	exports['default'] = function (str) {
	    if (!(0, _isHangul2['default'])(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _varsFinalConsonants2['default'][parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28) % 28)];
	};
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @description 문자열이 한글인지 검사한다
	 * @param {string} str 문자열
	 * @param {number} [len] 검사길이
	 * @return {boolean} 검사결과
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (str, len) {
	    if (typeof str !== 'string' || str.length === 0) {
	        return false;
	    }
	    if (!len || len < 0 || len > str.length) {
	        len = str.length;
	    }
	    for (var i = 0; i < len; i++) {
	        var c = str.charCodeAt(i);
	        if (c < 0xAC00 || c > 0xD7A3) {
	            return false;
	        }
	    }
	    return true;
	};
	
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _isHangul = __webpack_require__(3);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _varsInitialConsonants = __webpack_require__(6);
	
	var _varsInitialConsonants2 = _interopRequireDefault(_varsInitialConsonants);
	
	/**
	 * @description 한글 한문자에서 초성을 분리해서 가져온다
	 * @param {string} str 문자
	 * @return {string} 초성
	 */
	
	exports['default'] = function (str) {
	    if (!(0, _isHangul2['default'])(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _varsInitialConsonants2['default'][parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) / (21 * 28))];
	};
	
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _isHangul = __webpack_require__(3);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _varsVowels = __webpack_require__(8);
	
	var _varsVowels2 = _interopRequireDefault(_varsVowels);
	
	/**
	 * @description 한글 한문자에서 중성을 분리해서 가져온다
	 * @param {string} str 문자
	 * @return {string} 중성
	 */
	
	exports['default'] = function (str) {
	    if (!(0, _isHangul2['default'])(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _varsVowels2['default'][parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28) / 28)];
	};
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _isHangul = __webpack_require__(3);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _under = __webpack_require__(1);
	
	var _under2 = _interopRequireDefault(_under);
	
	/**
	 * @description 한문자의 종성의 유무를 검사한다
	 * @param {string} str 문자
	 * @return {boolean} 종성의 유무
	 */
	
	exports['default'] = function (str) {
	  return (0, _isHangul2['default'])(str, 1) && (0, _under2['default'])(str) !== '';
	};
	
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _hasUnder = __webpack_require__(9);
	
	var _hasUnder2 = _interopRequireDefault(_hasUnder);
	
	/**
	 * @description 문자열의 마지막 문자의 종성 유무를 검사한다
	 * @param {string} str 문자열
	 * @return {boolean} 마지막 문자의 종성 유무
	 */
	
	exports['default'] = function (str) {
	    if (typeof str !== 'string' || str.length === 0) {
	        return false;
	    }
	    return (0, _hasUnder2['default'])(str.charAt(str.length - 1));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _varsNumbers = __webpack_require__(12);
	
	var _varsNumbers2 = _interopRequireDefault(_varsNumbers);
	
	var _varsLargeNumbers = __webpack_require__(13);
	
	var _varsLargeNumbers2 = _interopRequireDefault(_varsLargeNumbers);
	
	/**
	 * @description 숫자를 한글형식으로 바꿔준다
	 * @param {number|string} number 숫자
	 * @param {string} [delimiter] 단위 구분자
	 * @return {string} 한글숫자
	 */
	
	exports['default'] = function (number, delimiter) {
	    if (typeof number === 'undefined') {
	        throw new TypeError('\'number\' is undefined');
	    }
	    if (typeof number !== 'string') {
	        number = number.toString();
	    }
	    if (!/^[0-9]+$/.test(number)) {
	        return number;
	    }
	    if (number.charAt(0) === '0') {
	        for (var i = 1; i < number.length; i++) {
	            if (number.charAt(i) === '0') {
	                continue;
	            }
	            number = number.substring(i);
	            break;
	        }
	    }
	    if (number.length === 0) {
	        return _varsNumbers2['default'][0];
	    }
	    if (number.length === 1) {
	        return _varsNumbers2['default'][number.charAt(0)];
	    }
	    var splitedNumbers = number.split('').map(function (a) {
	        return parseInt(a);
	    });
	    var reversedNumbers = splitedNumbers.reverse();
	    var groupedNumbers = [];
	    for (var i = 0; i < reversedNumbers.length; i += 4) {
	        groupedNumbers.push(reversedNumbers.slice(i, i + 4));
	    }
	    return groupedNumbers.map(function (nums, i) {
	        var hnums = nums.map(function (n, j) {
	            var hnum = n > 1 || j === 0 && n === 1 ? _varsNumbers2['default'][n] : '';
	            var unit = n > 0 && j > 0 ? _varsLargeNumbers2['default'][0][j - 1] : '';
	            return hnum + unit;
	        }).reduce(function (a, b) {
	            return b + a;
	        });
	        var lunit = i > 0 && hnums.length > 0 ? _varsLargeNumbers2['default'][1][(i - 1) % 4] : '';
	        return hnums + lunit;
	    }).filter(function (a) {
	        return a.length > 0;
	    }).reduce(function (a, b) {
	        return b + (delimiter || '') + a;
	    });
	};
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = [['십', '백', '천'], ['만', '억', '조', '경']];
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOTNlYTgzNjJmMTFmMDcyZWNmOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9pc0hhbmd1bC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy9maW5hbENvbnNvbmFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Zvd2VsLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL3Zvd2Vscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzVW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhc0xhc3RVbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0TnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL251bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O3FDQ3RDcUIsQ0FB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LENBQUM7VUFBQSxDQUFDLENBQUM7QUFDM0IsYUFBSSxLQUFLLEdBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBSSw4QkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzdFLGdCQUFPLEtBQUssR0FBRyxLQUFLLENBQUM7TUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFDO2dCQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztNQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFBSyxDQUFDLElBQUksU0FBUyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7TUFBQSxDQUFDLENBQUM7RUFDNUU7Ozs7Ozs7Ozs7Ozs7c0JDakRjLENBQ1gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxDQUNOOzs7Ozs7Ozs7Ozs7c0JDWGMsQ0FDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDdkIiLCJmaWxlIjoiaGFuZ3VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJoYW5ndWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaGFuZ3VsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTNlYTgzNjJmMTFmMDcyZWNmOFxuICoqLyIsImltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IGluaXRpYWwgZnJvbSAnLi9pbml0aWFsJ1xuaW1wb3J0IHZvd2VsIGZyb20gJy4vdm93ZWwnXG5pbXBvcnQgdW5kZXIgZnJvbSAnLi91bmRlcidcbmltcG9ydCBoYXNVbmRlciBmcm9tICcuL2hhc1VuZGVyJ1xuaW1wb3J0IGhhc0xhc3RVbmRlciBmcm9tICcuL2hhc0xhc3RVbmRlcidcbmltcG9ydCBmb3JtYXROdW1iZXIgZnJvbSAnLi9mb3JtYXROdW1iZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpczogaXNIYW5ndWwsXG4gICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICB2b3dlbDogdm93ZWwsXG4gICAgdW5kZXI6IHVuZGVyLFxuICAgIGhhc1VuZGVyOiBoYXNVbmRlcixcbiAgICBoYXNMYXN0VW5kZXI6IGhhc0xhc3RVbmRlcixcbiAgICBmb3JtYXROdW1iZXI6IGZvcm1hdE51bWJlclxufTtcblxuU3RyaW5nLnByb3RvdHlwZS5pc0hhbmd1bCA9IGZ1bmN0aW9uKGxlbikge1xuICAgIHJldHVybiBpc0hhbmd1bCh0aGlzLnRvU3RyaW5nKCksIGxlbik7XG59O1xuXG5TdHJpbmcucHJvdG90eXBlLmhhbmd1bEluaXRpYWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaW5pdGlhbCh0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYW5ndWxWb3dlbCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2b3dlbCh0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYW5ndWxVbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1bmRlcih0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYXNIYW5ndWxVbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBoYXNVbmRlcih0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYXNMYXN0SGFuZ3VsVW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaGFzTGFzdFVuZGVyKHRoaXMudG9TdHJpbmcoKSk7XG59O1xuXG5TdHJpbmcucHJvdG90eXBlLnRvSGFuZ3VsTnVtYmVyID0gZnVuY3Rpb24oZGVsaW1pdGVyKSB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcih0aGlzLnRvU3RyaW5nKCksIGRlbGltaXRlcik7XG59O1xuXG5OdW1iZXIucHJvdG90eXBlLnRvSGFuZ3VsID0gZnVuY3Rpb24oZGVsaW1pdGVyKSB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcih0aGlzLnRvU3RyaW5nKCksIGRlbGltaXRlcik7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBGSU5BTF9DT05TT05BTlRTIGZyb20gJy4vdmFycy9maW5hbENvbnNvbmFudHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7KKF7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOyiheyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIEZJTkFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgJSAyOCldO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdW5kZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnbQg7ZWc6riA7J247KeAIOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuXSDqsoDsgqzquLjsnbRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOqygOyCrOqysOqzvFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIsIGxlbikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsZW4gfHwgbGVuIDwgMCB8fCBsZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweEFDMDAgfHwgYyA+IDB4RDdBMykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNIYW5ndWwuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBbXG4gICAgJycsXG4gICAgJ+OEsScsXG4gICAgJ+OEsicsXG4gICAgJ+OEsycsXG4gICAgJ+OEtCcsXG4gICAgJ+OEtScsXG4gICAgJ+OEticsXG4gICAgJ+OEtycsXG4gICAgJ+OEuScsXG4gICAgJ+OEuicsXG4gICAgJ+OEuycsXG4gICAgJ+OEvCcsXG4gICAgJ+OEvScsXG4gICAgJ+OEvicsXG4gICAgJ+OEvycsXG4gICAgJ+OFgCcsXG4gICAgJ+OFgScsXG4gICAgJ+OFgicsXG4gICAgJ+OFhCcsXG4gICAgJ+OFhScsXG4gICAgJ+OFhicsXG4gICAgJ+OFhycsXG4gICAgJ+OFiCcsXG4gICAgJ+OFiicsXG4gICAgJ+OFiycsXG4gICAgJ+OFjCcsXG4gICAgJ+OFjScsXG4gICAgJ+OFjidcbl07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9maW5hbENvbnNvbmFudHMuanNcbiAqKi8iLCJpbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBJTklUSUFMX0NPTlNPTkFOVFMgZnJvbSAnLi92YXJzL2luaXRpYWxDb25zb25hbnRzJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzquIAg7ZWc66y47J6Q7JeQ7IScIOy0iOyEseydhCDrtoTrpqztlbTshJwg6rCA7KC47Jio64ukXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOusuOyekFxuICogQHJldHVybiB7c3RyaW5nfSDstIjshLFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFpc0hhbmd1bChzdHIsIDEpKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5jaGFyQXQoMCkgOiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBJTklUSUFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKChzdHIuY2hhckNvZGVBdCgwKSAmIDB4RkZGRikgLSAweEFDMDApIC8gKDIxICogMjgpKV07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5pdGlhbC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICAn44SxJyxcbiAgICAn44SyJyxcbiAgICAn44S0JyxcbiAgICAn44S3JyxcbiAgICAn44S4JyxcbiAgICAn44S5JyxcbiAgICAn44WBJyxcbiAgICAn44WCJyxcbiAgICAn44WDJyxcbiAgICAn44WFJyxcbiAgICAn44WGJyxcbiAgICAn44WHJyxcbiAgICAn44WIJyxcbiAgICAn44WJJyxcbiAgICAn44WKJyxcbiAgICAn44WLJyxcbiAgICAn44WMJyxcbiAgICAn44WNJyxcbiAgICAn44WOJ1xuXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL2luaXRpYWxDb25zb25hbnRzLmpzXG4gKiovIiwiaW1wb3J0IGlzSGFuZ3VsIGZyb20gJy4vaXNIYW5ndWwnXG5pbXBvcnQgVk9XRUxTIGZyb20gJy4vdmFycy92b3dlbHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7KSR7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOykkeyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIFZPV0VMU1twYXJzZUludCgoKChzdHIuY2hhckNvZGVBdCgwKSAmIDB4RkZGRikgLSAweEFDMDApICUgKDIxICogMjgpKSAvIDI4KV07XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdm93ZWwuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBbXG4gICAgJ+OFjycsXG4gICAgJ+OFkCcsXG4gICAgJ+OFkScsXG4gICAgJ+OFkicsXG4gICAgJ+OFkycsXG4gICAgJ+OFlCcsXG4gICAgJ+OFlScsXG4gICAgJ+OFlicsXG4gICAgJ+OFlycsXG4gICAgJ+OFmCcsXG4gICAgJ+OFmScsXG4gICAgJ+OFmicsXG4gICAgJ+OFmycsXG4gICAgJ+OFnCcsXG4gICAgJ+OFnScsXG4gICAgJ+OFnicsXG4gICAgJ+OFnycsXG4gICAgJ+OFoCcsXG4gICAgJ+OFoScsXG4gICAgJ+OFoicsXG4gICAgJ+OFoydcbl07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy92b3dlbHMuanNcbiAqKi8iLCJpbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCB1bmRlciBmcm9tICcuL3VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzrrLjsnpDsnZgg7KKF7ISx7J2YIOycoOustOulvCDqsoDsgqztlZzri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtib29sZWFufSDsooXshLHsnZgg7Jyg66y0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBpc0hhbmd1bChzdHIsIDEpICYmIHVuZGVyKHN0cikgIT09ICcnO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGFzVW5kZXIuanNcbiAqKi8iLCJpbXBvcnQgaGFzVW5kZXIgZnJvbSAnLi9oYXNVbmRlcidcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g66y47J6Q7Je07J2YIOuniOyngOuniSDrrLjsnpDsnZgg7KKF7ISxIOycoOustOulvCDqsoDsgqztlZzri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6Q7Je0XG4gKiBAcmV0dXJuIHtib29sZWFufSDrp4jsp4Drp4kg66y47J6Q7J2YIOyiheyEsSDsnKDrrLRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8IHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzVW5kZXIoc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2hhc0xhc3RVbmRlci5qc1xuICoqLyIsImltcG9ydCBOVU1CRVJTIGZyb20gJy4vdmFycy9udW1iZXJzJ1xuaW1wb3J0IExBUkdFX05VTUJFUlMgZnJvbSAnLi92YXJzL2xhcmdlTnVtYmVycydcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g7Iir7J6Q66W8IO2VnOq4gO2YleyLneycvOuhnCDrsJTqv5TspIDri6RcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIOyIq+yekFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxpbWl0ZXJdIOuLqOychCDqtazrtoTsnpBcbiAqIEByZXR1cm4ge3N0cmluZ30g7ZWc6riA7Iir7J6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG51bWJlciwgZGVsaW1pdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCInbnVtYmVyJyBpcyB1bmRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyLmNoYXJBdCgwKSA9PT0gJzAnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyLmNoYXJBdChpKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyaW5nKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bWJlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIE5VTUJFUlNbMF07XG4gICAgfVxuICAgIGlmIChudW1iZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBOVU1CRVJTW251bWJlci5jaGFyQXQoMCldO1xuICAgIH1cbiAgICBsZXQgc3BsaXRlZE51bWJlcnMgPSBudW1iZXIuc3BsaXQoJycpLm1hcChhID0+IHBhcnNlSW50KGEpKTtcbiAgICBsZXQgcmV2ZXJzZWROdW1iZXJzID0gc3BsaXRlZE51bWJlcnMucmV2ZXJzZSgpO1xuICAgIGxldCBncm91cGVkTnVtYmVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2ZXJzZWROdW1iZXJzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGdyb3VwZWROdW1iZXJzLnB1c2gocmV2ZXJzZWROdW1iZXJzLnNsaWNlKGksIGkgKyA0KSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cGVkTnVtYmVycy5tYXAoKG51bXMsIGkpID0+IHtcbiAgICAgICAgbGV0IGhudW1zID0gbnVtcy5tYXAoKG4sIGopID0+IHtcbiAgICAgICAgICAgIGxldCBobnVtID0gKG4gPiAxIHx8IGogPT09IDAgJiYgbiA9PT0gMSkgPyBOVU1CRVJTW25dIDogJyc7XG4gICAgICAgICAgICBsZXQgdW5pdCA9IChuID4gMCAmJiBqID4gMCkgPyBMQVJHRV9OVU1CRVJTWzBdW2ogLSAxXSA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGhudW0gKyB1bml0O1xuICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGIgKyBhKTtcbiAgICAgICAgbGV0IGx1bml0ID0gKGkgPiAwICYmIGhudW1zLmxlbmd0aCA+IDApID8gTEFSR0VfTlVNQkVSU1sxXVsoaSAtIDEpICUgNF0gOiAnJztcbiAgICAgICAgcmV0dXJuIGhudW1zICsgbHVuaXQ7XG4gICAgfSkuZmlsdGVyKGEgPT4gYS5sZW5ndGggPiAwKS5yZWR1Y2UoKGEsIGIpID0+IGIgKyAoZGVsaW1pdGVyIHx8ICcnKSArIGEpO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2Zvcm1hdE51bWJlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IFtcbiAgICAn7JiBJyxcbiAgICAn7J28JyxcbiAgICAn7J20JyxcbiAgICAn7IK8JyxcbiAgICAn7IKsJyxcbiAgICAn7JikJyxcbiAgICAn7JyhJyxcbiAgICAn7LmgJyxcbiAgICAn7YyUJyxcbiAgICAn6rWsJ1xuXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL251bWJlcnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBbXG4gICAgWyfsi60nLCAn67CxJywgJ+yynCddLFxuICAgIFsn66eMJywgJ+yWtScsICfsobAnLCAn6rK9J11cbl07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFycy9sYXJnZU51bWJlcnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9