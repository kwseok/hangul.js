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

	'use strict';
	
	/**
	 * @description 문자열이 한글인지 검사한다
	 * @param {string} str 문자열
	 * @param {number} [len] 검사길이
	 * @return {boolean} 검사결과
	 */
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNjc1MmFkZDZmNzUwZGQzMGEwZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzSGFuZ3VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2luaXRpYWxDb25zb25hbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy92b3dlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy92b3dlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2ZpbmFsQ29uc29uYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzVW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhc0xhc3RVbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0TnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL251bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFVRTtBQUNYLE9BQUUsb0JBQVU7QUFDWixZQUFPLG1CQUFTO0FBQ2hCLFVBQUssaUJBQU87QUFDWixVQUFLLGlCQUFPO0FBQ1osYUFBUSxvQkFBVTtBQUNsQixpQkFBWSx3QkFBYztBQUMxQixpQkFBWSx3QkFBYztFQUM3Qjs7QUFFRCxPQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLEdBQUcsRUFBRTtBQUN0QyxZQUFPLHdCQUFTLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUN6QyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFlBQVc7QUFDeEMsWUFBTyx1QkFBUSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztFQUNuQyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVc7QUFDdEMsWUFBTyxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztFQUNqQyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVc7QUFDdEMsWUFBTyxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztFQUNqQyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVc7QUFDekMsWUFBTyx3QkFBUyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztFQUNwQyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsWUFBVztBQUM3QyxZQUFPLDRCQUFhLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0VBQ3hDLENBQUM7O0FBRUYsT0FBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBUyxTQUFTLEVBQUU7QUFDbEQsWUFBTyw0QkFBYSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDbkQsQ0FBQzs7QUFFRixPQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFTLFNBQVMsRUFBRTtBQUM1QyxZQUFPLDRCQUFhLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztFQUNuRCxDOzs7Ozs7QUNsREQsYUFBWTs7Ozs7Ozs7QUFBQzs7Ozs7bUJBUUUsVUFBUyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzlCLFNBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzdDLGdCQUFPLEtBQUssQ0FBQztNQUNoQjtBQUNELFNBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNwQjtBQUNELFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUIsYUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixhQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRTtBQUMxQixvQkFBTyxLQUFLLENBQUM7VUFDaEI7TUFDSjtBQUNELFlBQU8sSUFBSSxDQUFDO0VBQ2YsQzs7Ozs7O0FDdEJELGFBQVksQ0FBQzs7Ozs7O21CQVVFLFVBQVMsR0FBRyxFQUFFO0FBQ3pCLFNBQUksQ0FBQyx3QkFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDbkIsZ0JBQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO01BQ3hEO0FBQ0QsWUFBTyw0QkFBbUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxNQUFNLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1Rjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELGFBQVksQ0FBQzs7Ozs7bUJBRUUsQ0FDWCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLENBQ04sQzs7Ozs7O0FDdEJELGFBQVksQ0FBQzs7Ozs7O21CQVVFLFVBQVMsR0FBRyxFQUFFO0FBQ3pCLFNBQUksQ0FBQyx3QkFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDbkIsZ0JBQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO01BQ3hEO0FBQ0QsWUFBTyxpQkFBTyxRQUFRLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN2Rjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELGFBQVksQ0FBQzs7Ozs7bUJBRUUsQ0FDWCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsQ0FDTixDOzs7Ozs7QUN4QkQsYUFBWSxDQUFDOzs7Ozs7bUJBVUUsVUFBUyxHQUFHLEVBQUU7QUFDekIsU0FBSSxDQUFDLHdCQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNuQixnQkFBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7TUFDeEQ7QUFDRCxZQUFPLDBCQUFpQixRQUFRLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNqRzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZELGFBQVksQ0FBQzs7Ozs7bUJBRUUsQ0FDWCxFQUFFLEVBQ0YsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLENBQ04sQzs7Ozs7O0FDL0JELGFBQVksQ0FBQzs7Ozs7O21CQVVFLFVBQVMsR0FBRyxFQUFFO0FBQ3pCLFVBQU8sd0JBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLHFCQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztFQUNoRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELGFBQVksQ0FBQzs7Ozs7O21CQVNFLFVBQVMsR0FBRyxFQUFFO0FBQ3pCLFNBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzdDLGdCQUFPLEtBQUssQ0FBQztNQUNoQjtBQUNELFlBQU8sd0JBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDL0M7Ozs7Ozs7Ozs7OztBQ2RELGFBQVksQ0FBQzs7Ozs7O21CQVdFLFVBQVMsTUFBTSxFQUFFLFNBQVMsRUFBRTtBQUN2QyxTQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtBQUMvQixlQUFNLElBQUksU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7TUFDaEQ7QUFDRCxTQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtBQUM1QixlQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO01BQzlCO0FBQ0QsU0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDMUIsZ0JBQU8sTUFBTSxDQUFDO01BQ2pCO0FBQ0QsU0FBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUMxQixjQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxpQkFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUMxQiwwQkFBUztjQUNaO0FBQ0QsbUJBQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLG1CQUFNO1VBQ1Q7TUFDSjtBQUNELFNBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDckIsZ0JBQU8sa0JBQVEsQ0FBQyxDQUFDLENBQUM7TUFDckI7QUFDRCxTQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLGdCQUFPLGtCQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwQztBQUNELFNBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUM7Z0JBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztNQUFBLENBQUMsQ0FBQztBQUM1RCxTQUFJLGVBQWUsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0MsU0FBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDaEQsdUJBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDeEQ7QUFDRCxZQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFLO0FBQ25DLGFBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQzNCLGlCQUFJLElBQUksR0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBSSxrQkFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDM0QsaUJBQUksSUFBSSxHQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBSSx1QkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNELG9CQUFPLElBQUksR0FBRyxJQUFJLENBQUM7VUFDdEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO29CQUFLLENBQUMsR0FBRyxDQUFDO1VBQUEsQ0FBQyxDQUFDO0FBQzNCLGFBQUksS0FBSyxHQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUksdUJBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM3RSxnQkFBTyxLQUFLLEdBQUcsS0FBSyxDQUFDO01BQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBQztnQkFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7TUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUssQ0FBQyxJQUFJLFNBQVMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO01BQUEsQ0FBQyxDQUFDO0VBQzVFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRELGFBQVksQ0FBQzs7Ozs7bUJBRUUsQ0FDWCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLENBQ04sQzs7Ozs7O0FDYkQsYUFBWSxDQUFDOzs7OzttQkFFRSxDQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUN2QixDIiwiZmlsZSI6Imhhbmd1bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImhhbmd1bFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJoYW5ndWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY2NzUyYWRkNmY3NTBkZDMwYTBkXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBpbml0aWFsIGZyb20gJy4vaW5pdGlhbCdcbmltcG9ydCB2b3dlbCBmcm9tICcuL3Zvd2VsJ1xuaW1wb3J0IHVuZGVyIGZyb20gJy4vdW5kZXInXG5pbXBvcnQgaGFzVW5kZXIgZnJvbSAnLi9oYXNVbmRlcidcbmltcG9ydCBoYXNMYXN0VW5kZXIgZnJvbSAnLi9oYXNMYXN0VW5kZXInXG5pbXBvcnQgZm9ybWF0TnVtYmVyIGZyb20gJy4vZm9ybWF0TnVtYmVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXM6IGlzSGFuZ3VsLFxuICAgIGluaXRpYWw6IGluaXRpYWwsXG4gICAgdm93ZWw6IHZvd2VsLFxuICAgIHVuZGVyOiB1bmRlcixcbiAgICBoYXNVbmRlcjogaGFzVW5kZXIsXG4gICAgaGFzTGFzdFVuZGVyOiBoYXNMYXN0VW5kZXIsXG4gICAgZm9ybWF0TnVtYmVyOiBmb3JtYXROdW1iZXJcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaXNIYW5ndWwgPSBmdW5jdGlvbihsZW4pIHtcbiAgICByZXR1cm4gaXNIYW5ndWwodGhpcy50b1N0cmluZygpLCBsZW4pO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYW5ndWxJbml0aWFsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGluaXRpYWwodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFuZ3VsVm93ZWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdm93ZWwodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFuZ3VsVW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdW5kZXIodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFzSGFuZ3VsVW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaGFzVW5kZXIodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFzTGFzdEhhbmd1bFVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGhhc0xhc3RVbmRlcih0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS50b0hhbmd1bE51bWJlciA9IGZ1bmN0aW9uKGRlbGltaXRlcikge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpO1xufTtcblxuTnVtYmVyLnByb3RvdHlwZS50b0hhbmd1bCA9IGZ1bmN0aW9uKGRlbGltaXRlcikge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnbQg7ZWc6riA7J247KeAIOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuXSDqsoDsgqzquLjsnbRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOqygOyCrOqysOqzvFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIsIGxlbikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsZW4gfHwgbGVuIDwgMCB8fCBsZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweEFDMDAgfHwgYyA+IDB4RDdBMykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNIYW5ndWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IElOSVRJQUxfQ09OU09OQU5UUyBmcm9tICcuL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7LSI7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOy0iOyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIElOSVRJQUxfQ09OU09OQU5UU1twYXJzZUludCgoKHN0ci5jaGFyQ29kZUF0KDApICYgMHhGRkZGKSAtIDB4QUMwMCkgLyAoMjEgKiAyOCkpXTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luaXRpYWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAn44SxJyxcbiAgICAn44SyJyxcbiAgICAn44S0JyxcbiAgICAn44S3JyxcbiAgICAn44S4JyxcbiAgICAn44S5JyxcbiAgICAn44WBJyxcbiAgICAn44WCJyxcbiAgICAn44WDJyxcbiAgICAn44WFJyxcbiAgICAn44WGJyxcbiAgICAn44WHJyxcbiAgICAn44WIJyxcbiAgICAn44WJJyxcbiAgICAn44WKJyxcbiAgICAn44WLJyxcbiAgICAn44WMJyxcbiAgICAn44WNJyxcbiAgICAn44WOJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IFZPV0VMUyBmcm9tICcuL3ZhcnMvdm93ZWxzJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzquIAg7ZWc66y47J6Q7JeQ7IScIOykkeyEseydhCDrtoTrpqztlbTshJwg6rCA7KC47Jio64ukXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOusuOyekFxuICogQHJldHVybiB7c3RyaW5nfSDspJHshLFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFpc0hhbmd1bChzdHIsIDEpKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5jaGFyQXQoMCkgOiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBWT1dFTFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgLyAyOCldO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdm93ZWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAn44WPJyxcbiAgICAn44WQJyxcbiAgICAn44WRJyxcbiAgICAn44WSJyxcbiAgICAn44WTJyxcbiAgICAn44WUJyxcbiAgICAn44WVJyxcbiAgICAn44WWJyxcbiAgICAn44WXJyxcbiAgICAn44WYJyxcbiAgICAn44WZJyxcbiAgICAn44WaJyxcbiAgICAn44WbJyxcbiAgICAn44WcJyxcbiAgICAn44WdJyxcbiAgICAn44WeJyxcbiAgICAn44WfJyxcbiAgICAn44WgJyxcbiAgICAn44WhJyxcbiAgICAn44WiJyxcbiAgICAn44WjJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvdm93ZWxzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBGSU5BTF9DT05TT05BTlRTIGZyb20gJy4vdmFycy9maW5hbENvbnNvbmFudHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7KKF7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOyiheyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIEZJTkFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgJSAyOCldO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAnJyxcbiAgICAn44SxJyxcbiAgICAn44SyJyxcbiAgICAn44SzJyxcbiAgICAn44S0JyxcbiAgICAn44S1JyxcbiAgICAn44S2JyxcbiAgICAn44S3JyxcbiAgICAn44S5JyxcbiAgICAn44S6JyxcbiAgICAn44S7JyxcbiAgICAn44S8JyxcbiAgICAn44S9JyxcbiAgICAn44S+JyxcbiAgICAn44S/JyxcbiAgICAn44WAJyxcbiAgICAn44WBJyxcbiAgICAn44WCJyxcbiAgICAn44WEJyxcbiAgICAn44WFJyxcbiAgICAn44WGJyxcbiAgICAn44WHJyxcbiAgICAn44WIJyxcbiAgICAn44WKJyxcbiAgICAn44WLJyxcbiAgICAn44WMJyxcbiAgICAn44WNJyxcbiAgICAn44WOJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvZmluYWxDb25zb25hbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCB1bmRlciBmcm9tICcuL3VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzrrLjsnpDsnZgg7KKF7ISx7J2YIOycoOustOulvCDqsoDsgqztlZzri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtib29sZWFufSDsooXshLHsnZgg7Jyg66y0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBpc0hhbmd1bChzdHIsIDEpICYmIHVuZGVyKHN0cikgIT09ICcnO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGFzVW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBoYXNVbmRlciBmcm9tICcuL2hhc1VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnZgg66eI7KeA66eJIOusuOyekOydmCDsooXshLEg7Jyg66y066W8IOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOuniOyngOuniSDrrLjsnpDsnZgg7KKF7ISxIOycoOustFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNVbmRlcihzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oYXNMYXN0VW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBOVU1CRVJTIGZyb20gJy4vdmFycy9udW1iZXJzJ1xuaW1wb3J0IExBUkdFX05VTUJFUlMgZnJvbSAnLi92YXJzL2xhcmdlTnVtYmVycydcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g7Iir7J6Q66W8IO2VnOq4gO2YleyLneycvOuhnCDrsJTqv5TspIDri6RcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIOyIq+yekFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxpbWl0ZXJdIOuLqOychCDqtazrtoTsnpBcbiAqIEByZXR1cm4ge3N0cmluZ30g7ZWc6riA7Iir7J6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG51bWJlciwgZGVsaW1pdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCInbnVtYmVyJyBpcyB1bmRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyLmNoYXJBdCgwKSA9PT0gJzAnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyLmNoYXJBdChpKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyaW5nKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bWJlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIE5VTUJFUlNbMF07XG4gICAgfVxuICAgIGlmIChudW1iZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBOVU1CRVJTW251bWJlci5jaGFyQXQoMCldO1xuICAgIH1cbiAgICBsZXQgc3BsaXRlZE51bWJlcnMgPSBudW1iZXIuc3BsaXQoJycpLm1hcChhID0+IHBhcnNlSW50KGEpKTtcbiAgICBsZXQgcmV2ZXJzZWROdW1iZXJzID0gc3BsaXRlZE51bWJlcnMucmV2ZXJzZSgpO1xuICAgIGxldCBncm91cGVkTnVtYmVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2ZXJzZWROdW1iZXJzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGdyb3VwZWROdW1iZXJzLnB1c2gocmV2ZXJzZWROdW1iZXJzLnNsaWNlKGksIGkgKyA0KSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cGVkTnVtYmVycy5tYXAoKG51bXMsIGkpID0+IHtcbiAgICAgICAgbGV0IGhudW1zID0gbnVtcy5tYXAoKG4sIGopID0+IHtcbiAgICAgICAgICAgIGxldCBobnVtID0gKG4gPiAxIHx8IGogPT09IDAgJiYgbiA9PT0gMSkgPyBOVU1CRVJTW25dIDogJyc7XG4gICAgICAgICAgICBsZXQgdW5pdCA9IChuID4gMCAmJiBqID4gMCkgPyBMQVJHRV9OVU1CRVJTWzBdW2ogLSAxXSA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGhudW0gKyB1bml0O1xuICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGIgKyBhKTtcbiAgICAgICAgbGV0IGx1bml0ID0gKGkgPiAwICYmIGhudW1zLmxlbmd0aCA+IDApID8gTEFSR0VfTlVNQkVSU1sxXVsoaSAtIDEpICUgNF0gOiAnJztcbiAgICAgICAgcmV0dXJuIGhudW1zICsgbHVuaXQ7XG4gICAgfSkuZmlsdGVyKGEgPT4gYS5sZW5ndGggPiAwKS5yZWR1Y2UoKGEsIGIpID0+IGIgKyAoZGVsaW1pdGVyIHx8ICcnKSArIGEpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZm9ybWF0TnVtYmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgJ+yYgScsXG4gICAgJ+ydvCcsXG4gICAgJ+ydtCcsXG4gICAgJ+yCvCcsXG4gICAgJ+yCrCcsXG4gICAgJ+yYpCcsXG4gICAgJ+ycoScsXG4gICAgJ+y5oCcsXG4gICAgJ+2MlCcsXG4gICAgJ+q1rCdcbl07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL251bWJlcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICBbJ+yLrScsICfrsLEnLCAn7LKcJ10sXG4gICAgWyfrp4wnLCAn7Ja1JywgJ+yhsCcsICfqsr0nXVxuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==