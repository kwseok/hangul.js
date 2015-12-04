(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _isHangul = __webpack_require__(1);
	
	var _isHangul2 = _interopRequireDefault(_isHangul);
	
	var _initial = __webpack_require__(2);
	
	var _initial2 = _interopRequireDefault(_initial);
	
	var _vowel = __webpack_require__(4);
	
	var _vowel2 = _interopRequireDefault(_vowel);
	
	var _under = __webpack_require__(6);
	
	var _under2 = _interopRequireDefault(_under);
	
	var _hasUnder = __webpack_require__(8);
	
	var _hasUnder2 = _interopRequireDefault(_hasUnder);
	
	var _hasLastUnder = __webpack_require__(9);
	
	var _hasLastUnder2 = _interopRequireDefault(_hasLastUnder);
	
	var _formatNumber = __webpack_require__(10);
	
	var _formatNumber2 = _interopRequireDefault(_formatNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    is: _isHangul2.default,
	    initial: _initial2.default,
	    vowel: _vowel2.default,
	    under: _under2.default,
	    hasUnder: _hasUnder2.default,
	    hasLastUnder: _hasLastUnder2.default,
	    formatNumber: _formatNumber2.default
	};
	
	String.prototype.isHangul = function (len) {
	    return (0, _isHangul2.default)(this.toString(), len);
	};
	
	String.prototype.hangulInitial = function () {
	    return (0, _initial2.default)(this.toString());
	};
	
	String.prototype.hangulVowel = function () {
	    return (0, _vowel2.default)(this.toString());
	};
	
	String.prototype.hangulUnder = function () {
	    return (0, _under2.default)(this.toString());
	};
	
	String.prototype.hasHangulUnder = function () {
	    return (0, _hasUnder2.default)(this.toString());
	};
	
	String.prototype.hasLastHangulUnder = function () {
	    return (0, _hasLastUnder2.default)(this.toString());
	};
	
	String.prototype.toHangulNumber = function (delimiter) {
	    return (0, _formatNumber2.default)(this.toString(), delimiter);
	};
	
	Number.prototype.toHangul = function (delimiter) {
	    return (0, _formatNumber2.default)(this.toString(), delimiter);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict'
	
	/**
	 * @description 문자열이 한글인지 검사한다
	 * @param {string} str 문자열
	 * @param {number} [len] 검사길이
	 * @return {boolean} 검사결과
	 */
	;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (str, len) {
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (str) {
	    if (!(0, _isHangul2.default)(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _initialConsonants2.default[parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) / (21 * 28))];
	};
	
	var _isHangul = __webpack_require__(1);

	var _isHangul2 = _interopRequireDefault(_isHangul);

	var _initialConsonants = __webpack_require__(3);

	var _initialConsonants2 = _interopRequireDefault(_initialConsonants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (str) {
	    if (!(0, _isHangul2.default)(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _vowels2.default[parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28) / 28)];
	};
	
	var _isHangul = __webpack_require__(1);

	var _isHangul2 = _interopRequireDefault(_isHangul);

	var _vowels = __webpack_require__(5);

	var _vowels2 = _interopRequireDefault(_vowels);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (str) {
	    if (!(0, _isHangul2.default)(str, 1)) {
	        return typeof str === 'string' ? str.charAt(0) : str;
	    }
	    return _finalConsonants2.default[parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28) % 28)];
	};
	
	var _isHangul = __webpack_require__(1);

	var _isHangul2 = _interopRequireDefault(_isHangul);

	var _finalConsonants = __webpack_require__(7);

	var _finalConsonants2 = _interopRequireDefault(_finalConsonants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (str) {
	  return (0, _isHangul2.default)(str, 1) && (0, _under2.default)(str) !== '';
	};
	
	var _isHangul = __webpack_require__(1);

	var _isHangul2 = _interopRequireDefault(_isHangul);

	var _under = __webpack_require__(6);

	var _under2 = _interopRequireDefault(_under);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (str) {
	    if (typeof str !== 'string' || str.length === 0) {
	        return false;
	    }
	    return (0, _hasUnder2.default)(str.charAt(str.length - 1));
	};
	
	var _hasUnder = __webpack_require__(8);

	var _hasUnder2 = _interopRequireDefault(_hasUnder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (number, delimiter) {
	    if (typeof number === 'undefined') {
	        throw new TypeError("'number' is undefined");
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
	        return _numbers2.default[0];
	    }
	    if (number.length === 1) {
	        return _numbers2.default[number.charAt(0)];
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
	            var hnum = n > 1 || j === 0 && n === 1 ? _numbers2.default[n] : '';
	            var unit = n > 0 && j > 0 ? _largeNumbers2.default[0][j - 1] : '';
	            return hnum + unit;
	        }).reduce(function (a, b) {
	            return b + a;
	        });
	        var lunit = i > 0 && hnums.length > 0 ? _largeNumbers2.default[1][(i - 1) % 4] : '';
	        return hnums + lunit;
	    }).filter(function (a) {
	        return a.length > 0;
	    }).reduce(function (a, b) {
	        return b + (delimiter || '') + a;
	    });
	};
	
	var _numbers = __webpack_require__(11);

	var _numbers2 = _interopRequireDefault(_numbers);

	var _largeNumbers = __webpack_require__(12);

	var _largeNumbers2 = _interopRequireDefault(_largeNumbers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [['십', '백', '천'], ['만', '억', '조', '경']];

/***/ }
/******/ ])
});
;