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
	    for (var _i = 0; _i < reversedNumbers.length; _i += 4) {
	        groupedNumbers.push(reversedNumbers.slice(_i, _i + 4));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MDFmMTUyNDljYmJlMDdkZDU1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lzSGFuZ3VsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2luaXRpYWxDb25zb25hbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy92b3dlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFycy92b3dlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL2ZpbmFsQ29uc29uYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFzVW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhc0xhc3RVbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0TnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YXJzL251bWJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OzttQkFFZTtBQUNYLDJCQURXO0FBRVgsK0JBRlc7QUFHWCwyQkFIVztBQUlYLDJCQUpXO0FBS1gsaUNBTFc7QUFNWCx5Q0FOVztBQU9YLHlDQVBXOzs7O0FBVWYsUUFBTyxTQUFQLENBQWlCLFFBQWpCLEdBQTRCLFVBQVMsR0FBVCxFQUFjO0FBQ3RDLFlBQU8sd0JBQVMsS0FBSyxRQUFMLEVBQVQsRUFBMEIsR0FBMUIsQ0FBUCxDQURzQztFQUFkOztBQUk1QixRQUFPLFNBQVAsQ0FBaUIsYUFBakIsR0FBaUMsWUFBVztBQUN4QyxZQUFPLHVCQUFRLEtBQUssUUFBTCxFQUFSLENBQVAsQ0FEd0M7RUFBWDs7QUFJakMsUUFBTyxTQUFQLENBQWlCLFdBQWpCLEdBQStCLFlBQVc7QUFDdEMsWUFBTyxxQkFBTSxLQUFLLFFBQUwsRUFBTixDQUFQLENBRHNDO0VBQVg7O0FBSS9CLFFBQU8sU0FBUCxDQUFpQixXQUFqQixHQUErQixZQUFXO0FBQ3RDLFlBQU8scUJBQU0sS0FBSyxRQUFMLEVBQU4sQ0FBUCxDQURzQztFQUFYOztBQUkvQixRQUFPLFNBQVAsQ0FBaUIsY0FBakIsR0FBa0MsWUFBVztBQUN6QyxZQUFPLHdCQUFTLEtBQUssUUFBTCxFQUFULENBQVAsQ0FEeUM7RUFBWDs7QUFJbEMsUUFBTyxTQUFQLENBQWlCLGtCQUFqQixHQUFzQyxZQUFXO0FBQzdDLFlBQU8sNEJBQWEsS0FBSyxRQUFMLEVBQWIsQ0FBUCxDQUQ2QztFQUFYOztBQUl0QyxRQUFPLFNBQVAsQ0FBaUIsY0FBakIsR0FBa0MsVUFBUyxTQUFULEVBQW9CO0FBQ2xELFlBQU8sNEJBQWEsS0FBSyxRQUFMLEVBQWIsRUFBOEIsU0FBOUIsQ0FBUCxDQURrRDtFQUFwQjs7QUFJbEMsUUFBTyxTQUFQLENBQWlCLFFBQWpCLEdBQTRCLFVBQVMsU0FBVCxFQUFvQjtBQUM1QyxZQUFPLDRCQUFhLEtBQUssUUFBTCxFQUFiLEVBQThCLFNBQTlCLENBQVAsQ0FENEM7RUFBcEIsQzs7Ozs7O0FDaEQ1Qjs7Ozs7Ozs7Ozs7OzttQkFRZSxVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQzlCLFNBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixJQUFJLE1BQUosS0FBZSxDQUFmLEVBQWtCO0FBQzdDLGdCQUFPLEtBQVAsQ0FENkM7TUFBakQ7QUFHQSxTQUFJLENBQUMsR0FBRCxJQUFRLE1BQU0sQ0FBTixJQUFXLE1BQU0sSUFBSSxNQUFKLEVBQVk7QUFDckMsZUFBTSxJQUFJLE1BQUosQ0FEK0I7TUFBekM7QUFHQSxVQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxHQUFKLEVBQVMsR0FBekIsRUFBOEI7QUFDMUIsYUFBSSxJQUFJLElBQUksVUFBSixDQUFlLENBQWYsQ0FBSixDQURzQjtBQUUxQixhQUFJLElBQUksTUFBSixJQUFjLElBQUksTUFBSixFQUFZO0FBQzFCLG9CQUFPLEtBQVAsQ0FEMEI7VUFBOUI7TUFGSjtBQU1BLFlBQU8sSUFBUCxDQWI4QjtFQUFuQixDOzs7Ozs7QUNSZjs7Ozs7O21CQVVlLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLFNBQUksQ0FBQyx3QkFBUyxHQUFULEVBQWMsQ0FBZCxDQUFELEVBQW1CO0FBQ25CLGdCQUFPLE9BQU8sR0FBUCxLQUFlLFFBQWYsR0FBMEIsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUExQixHQUEwQyxHQUExQyxDQURZO01BQXZCO0FBR0EsWUFBTyw0QkFBbUIsU0FBUyxDQUFDLENBQUMsSUFBSSxVQUFKLENBQWUsQ0FBZixJQUFvQixNQUFwQixDQUFELEdBQStCLE1BQS9CLENBQUQsSUFBMkMsS0FBSyxFQUFMLENBQTNDLENBQTVCLENBQVAsQ0FKeUI7RUFBZDs7QUFSZjs7OztBQUNBOzs7Ozs7Ozs7O0FDSEE7Ozs7O21CQUVlLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLEVBSVgsR0FKVyxFQUtYLEdBTFcsRUFNWCxHQU5XLEVBT1gsR0FQVyxFQVFYLEdBUlcsRUFTWCxHQVRXLEVBVVgsR0FWVyxFQVdYLEdBWFcsRUFZWCxHQVpXLEVBYVgsR0FiVyxFQWNYLEdBZFcsRUFlWCxHQWZXLEVBZ0JYLEdBaEJXLEVBaUJYLEdBakJXLEVBa0JYLEdBbEJXLEVBbUJYLEdBbkJXLEU7Ozs7OztBQ0ZmOzs7Ozs7bUJBVWUsVUFBUyxHQUFULEVBQWM7QUFDekIsU0FBSSxDQUFDLHdCQUFTLEdBQVQsRUFBYyxDQUFkLENBQUQsRUFBbUI7QUFDbkIsZ0JBQU8sT0FBTyxHQUFQLEtBQWUsUUFBZixHQUEwQixJQUFJLE1BQUosQ0FBVyxDQUFYLENBQTFCLEdBQTBDLEdBQTFDLENBRFk7TUFBdkI7QUFHQSxZQUFPLGlCQUFPLFNBQVMsQ0FBRSxDQUFDLElBQUksVUFBSixDQUFlLENBQWYsSUFBb0IsTUFBcEIsQ0FBRCxHQUErQixNQUEvQixDQUFELElBQTJDLEtBQUssRUFBTCxDQUEzQyxHQUF1RCxFQUF4RCxDQUFoQixDQUFQLENBSnlCO0VBQWQ7O0FBUmY7Ozs7QUFDQTs7Ozs7Ozs7OztBQ0hBOzs7OzttQkFFZSxDQUNYLEdBRFcsRUFFWCxHQUZXLEVBR1gsR0FIVyxFQUlYLEdBSlcsRUFLWCxHQUxXLEVBTVgsR0FOVyxFQU9YLEdBUFcsRUFRWCxHQVJXLEVBU1gsR0FUVyxFQVVYLEdBVlcsRUFXWCxHQVhXLEVBWVgsR0FaVyxFQWFYLEdBYlcsRUFjWCxHQWRXLEVBZVgsR0FmVyxFQWdCWCxHQWhCVyxFQWlCWCxHQWpCVyxFQWtCWCxHQWxCVyxFQW1CWCxHQW5CVyxFQW9CWCxHQXBCVyxFQXFCWCxHQXJCVyxFOzs7Ozs7QUNGZjs7Ozs7O21CQVVlLFVBQVMsR0FBVCxFQUFjO0FBQ3pCLFNBQUksQ0FBQyx3QkFBUyxHQUFULEVBQWMsQ0FBZCxDQUFELEVBQW1CO0FBQ25CLGdCQUFPLE9BQU8sR0FBUCxLQUFlLFFBQWYsR0FBMEIsSUFBSSxNQUFKLENBQVcsQ0FBWCxDQUExQixHQUEwQyxHQUExQyxDQURZO01BQXZCO0FBR0EsWUFBTywwQkFBaUIsU0FBUyxDQUFFLENBQUMsSUFBSSxVQUFKLENBQWUsQ0FBZixJQUFvQixNQUFwQixDQUFELEdBQStCLE1BQS9CLENBQUQsSUFBMkMsS0FBSyxFQUFMLENBQTNDLEdBQXVELEVBQXhELENBQTFCLENBQVAsQ0FKeUI7RUFBZDs7QUFSZjs7OztBQUNBOzs7Ozs7Ozs7O0FDSEE7Ozs7O21CQUVlLENBQ1gsRUFEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLEVBSVgsR0FKVyxFQUtYLEdBTFcsRUFNWCxHQU5XLEVBT1gsR0FQVyxFQVFYLEdBUlcsRUFTWCxHQVRXLEVBVVgsR0FWVyxFQVdYLEdBWFcsRUFZWCxHQVpXLEVBYVgsR0FiVyxFQWNYLEdBZFcsRUFlWCxHQWZXLEVBZ0JYLEdBaEJXLEVBaUJYLEdBakJXLEVBa0JYLEdBbEJXLEVBbUJYLEdBbkJXLEVBb0JYLEdBcEJXLEVBcUJYLEdBckJXLEVBc0JYLEdBdEJXLEVBdUJYLEdBdkJXLEVBd0JYLEdBeEJXLEVBeUJYLEdBekJXLEVBMEJYLEdBMUJXLEVBMkJYLEdBM0JXLEVBNEJYLEdBNUJXLEU7Ozs7OztBQ0ZmOzs7Ozs7bUJBVWUsVUFBUyxHQUFULEVBQWM7QUFDekIsVUFBTyx3QkFBUyxHQUFULEVBQWMsQ0FBZCxLQUFvQixxQkFBTSxHQUFOLE1BQWUsRUFBZixDQURGO0VBQWQ7O0FBUmY7Ozs7QUFDQTs7Ozs7Ozs7OztBQ0hBOzs7Ozs7bUJBU2UsVUFBUyxHQUFULEVBQWM7QUFDekIsU0FBSSxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLElBQUksTUFBSixLQUFlLENBQWYsRUFBa0I7QUFDN0MsZ0JBQU8sS0FBUCxDQUQ2QztNQUFqRDtBQUdBLFlBQU8sd0JBQVMsSUFBSSxNQUFKLENBQVcsSUFBSSxNQUFKLEdBQWEsQ0FBYixDQUFwQixDQUFQLENBSnlCO0VBQWQ7O0FBUGY7Ozs7Ozs7Ozs7QUNGQTs7Ozs7O21CQVdlLFVBQVMsTUFBVCxFQUFpQixTQUFqQixFQUE0QjtBQUN2QyxTQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixFQUErQjtBQUMvQixlQUFNLElBQUksU0FBSixDQUFjLHVCQUFkLENBQU4sQ0FEK0I7TUFBbkM7QUFHQSxTQUFJLE9BQU8sTUFBUCxLQUFrQixRQUFsQixFQUE0QjtBQUM1QixrQkFBUyxPQUFPLFFBQVAsRUFBVCxDQUQ0QjtNQUFoQztBQUdBLFNBQUksQ0FBQyxXQUFXLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBRCxFQUEwQjtBQUMxQixnQkFBTyxNQUFQLENBRDBCO01BQTlCO0FBR0EsU0FBSSxPQUFPLE1BQVAsQ0FBYyxDQUFkLE1BQXFCLEdBQXJCLEVBQTBCO0FBQzFCLGNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDO0FBQ3BDLGlCQUFJLE9BQU8sTUFBUCxDQUFjLENBQWQsTUFBcUIsR0FBckIsRUFBMEI7QUFDMUIsMEJBRDBCO2NBQTlCO0FBR0Esc0JBQVMsT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQVQsQ0FKb0M7QUFLcEMsbUJBTG9DO1VBQXhDO01BREo7QUFTQSxTQUFJLE9BQU8sTUFBUCxLQUFrQixDQUFsQixFQUFxQjtBQUNyQixnQkFBTyxrQkFBUSxDQUFSLENBQVAsQ0FEcUI7TUFBekI7QUFHQSxTQUFJLE9BQU8sTUFBUCxLQUFrQixDQUFsQixFQUFxQjtBQUNyQixnQkFBTyxrQkFBUSxPQUFPLE1BQVAsQ0FBYyxDQUFkLENBQVIsQ0FBUCxDQURxQjtNQUF6QjtBQUdBLFNBQUksaUJBQWlCLE9BQU8sS0FBUCxDQUFhLEVBQWIsRUFBaUIsR0FBakIsQ0FBcUI7Z0JBQUssU0FBUyxDQUFUO01BQUwsQ0FBdEMsQ0F6Qm1DO0FBMEJ2QyxTQUFJLGtCQUFrQixlQUFlLE9BQWYsRUFBbEIsQ0ExQm1DO0FBMkJ2QyxTQUFJLGlCQUFpQixFQUFqQixDQTNCbUM7QUE0QnZDLFVBQUssSUFBSSxLQUFJLENBQUosRUFBTyxLQUFJLGdCQUFnQixNQUFoQixFQUF3QixNQUFLLENBQUwsRUFBUTtBQUNoRCx3QkFBZSxJQUFmLENBQW9CLGdCQUFnQixLQUFoQixDQUFzQixFQUF0QixFQUF5QixLQUFJLENBQUosQ0FBN0MsRUFEZ0Q7TUFBcEQ7QUFHQSxZQUFPLGVBQWUsR0FBZixDQUFtQixVQUFDLElBQUQsRUFBTyxDQUFQLEVBQWE7QUFDbkMsYUFBSSxRQUFRLEtBQUssR0FBTCxDQUFTLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUMzQixpQkFBSSxPQUFPLENBQUMsR0FBSSxDQUFKLElBQVMsTUFBTSxDQUFOLElBQVcsTUFBTSxDQUFOLEdBQVcsa0JBQVEsQ0FBUixDQUFoQyxHQUE2QyxFQUE3QyxDQURnQjtBQUUzQixpQkFBSSxPQUFPLENBQUMsR0FBSSxDQUFKLElBQVMsSUFBSSxDQUFKLEdBQVMsdUJBQWMsQ0FBZCxFQUFpQixJQUFJLENBQUosQ0FBcEMsR0FBNkMsRUFBN0MsQ0FGZ0I7QUFHM0Isb0JBQU8sT0FBTyxJQUFQLENBSG9CO1VBQVYsQ0FBVCxDQUlULE1BSlMsQ0FJRixVQUFDLENBQUQsRUFBSSxDQUFKO29CQUFVLElBQUksQ0FBSjtVQUFWLENBSk4sQ0FEK0I7QUFNbkMsYUFBSSxRQUFRLENBQUMsR0FBSSxDQUFKLElBQVMsTUFBTSxNQUFOLEdBQWUsQ0FBZixHQUFvQix1QkFBYyxDQUFkLEVBQWlCLENBQUMsSUFBSSxDQUFKLENBQUQsR0FBVSxDQUFWLENBQS9DLEdBQThELEVBQTlELENBTnVCO0FBT25DLGdCQUFPLFFBQVEsS0FBUixDQVA0QjtNQUFiLENBQW5CLENBUUosTUFSSSxDQVFHO2dCQUFLLEVBQUUsTUFBRixHQUFXLENBQVg7TUFBTCxDQVJILENBUXNCLE1BUnRCLENBUTZCLFVBQUMsQ0FBRCxFQUFJLENBQUo7Z0JBQVUsS0FBSyxhQUFhLEVBQWIsQ0FBTCxHQUF3QixDQUF4QjtNQUFWLENBUnBDLENBL0J1QztFQUE1Qjs7QUFUZjs7OztBQUNBOzs7Ozs7Ozs7O0FDSEE7Ozs7O21CQUVlLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLEVBSVgsR0FKVyxFQUtYLEdBTFcsRUFNWCxHQU5XLEVBT1gsR0FQVyxFQVFYLEdBUlcsRUFTWCxHQVRXLEVBVVgsR0FWVyxFOzs7Ozs7QUNGZjs7Ozs7bUJBRWUsQ0FDWCxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQURXLEVBRVgsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FGVyxFIiwiZmlsZSI6Imhhbmd1bC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImhhbmd1bFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJoYW5ndWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDkwMWYxNTI0OWNiYmUwN2RkNTVmXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBpbml0aWFsIGZyb20gJy4vaW5pdGlhbCdcbmltcG9ydCB2b3dlbCBmcm9tICcuL3Zvd2VsJ1xuaW1wb3J0IHVuZGVyIGZyb20gJy4vdW5kZXInXG5pbXBvcnQgaGFzVW5kZXIgZnJvbSAnLi9oYXNVbmRlcidcbmltcG9ydCBoYXNMYXN0VW5kZXIgZnJvbSAnLi9oYXNMYXN0VW5kZXInXG5pbXBvcnQgZm9ybWF0TnVtYmVyIGZyb20gJy4vZm9ybWF0TnVtYmVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXM6IGlzSGFuZ3VsLFxuICAgIGluaXRpYWw6IGluaXRpYWwsXG4gICAgdm93ZWw6IHZvd2VsLFxuICAgIHVuZGVyOiB1bmRlcixcbiAgICBoYXNVbmRlcjogaGFzVW5kZXIsXG4gICAgaGFzTGFzdFVuZGVyOiBoYXNMYXN0VW5kZXIsXG4gICAgZm9ybWF0TnVtYmVyOiBmb3JtYXROdW1iZXJcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaXNIYW5ndWwgPSBmdW5jdGlvbihsZW4pIHtcbiAgICByZXR1cm4gaXNIYW5ndWwodGhpcy50b1N0cmluZygpLCBsZW4pO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS5oYW5ndWxJbml0aWFsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGluaXRpYWwodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFuZ3VsVm93ZWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdm93ZWwodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFuZ3VsVW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdW5kZXIodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFzSGFuZ3VsVW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaGFzVW5kZXIodGhpcy50b1N0cmluZygpKTtcbn07XG5cblN0cmluZy5wcm90b3R5cGUuaGFzTGFzdEhhbmd1bFVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGhhc0xhc3RVbmRlcih0aGlzLnRvU3RyaW5nKCkpO1xufTtcblxuU3RyaW5nLnByb3RvdHlwZS50b0hhbmd1bE51bWJlciA9IGZ1bmN0aW9uKGRlbGltaXRlcikge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpO1xufTtcblxuTnVtYmVyLnByb3RvdHlwZS50b0hhbmd1bCA9IGZ1bmN0aW9uKGRlbGltaXRlcikge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnbQg7ZWc6riA7J247KeAIOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuXSDqsoDsgqzquLjsnbRcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOqygOyCrOqysOqzvFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIsIGxlbikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsZW4gfHwgbGVuIDwgMCB8fCBsZW4gPiBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweEFDMDAgfHwgYyA+IDB4RDdBMykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXNIYW5ndWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IElOSVRJQUxfQ09OU09OQU5UUyBmcm9tICcuL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7LSI7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOy0iOyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIElOSVRJQUxfQ09OU09OQU5UU1twYXJzZUludCgoKHN0ci5jaGFyQ29kZUF0KDApICYgMHhGRkZGKSAtIDB4QUMwMCkgLyAoMjEgKiAyOCkpXTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luaXRpYWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAn44SxJyxcbiAgICAn44SyJyxcbiAgICAn44S0JyxcbiAgICAn44S3JyxcbiAgICAn44S4JyxcbiAgICAn44S5JyxcbiAgICAn44WBJyxcbiAgICAn44WCJyxcbiAgICAn44WDJyxcbiAgICAn44WFJyxcbiAgICAn44WGJyxcbiAgICAn44WHJyxcbiAgICAn44WIJyxcbiAgICAn44WJJyxcbiAgICAn44WKJyxcbiAgICAn44WLJyxcbiAgICAn44WMJyxcbiAgICAn44WNJyxcbiAgICAn44WOJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IFZPV0VMUyBmcm9tICcuL3ZhcnMvdm93ZWxzJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzquIAg7ZWc66y47J6Q7JeQ7IScIOykkeyEseydhCDrtoTrpqztlbTshJwg6rCA7KC47Jio64ukXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOusuOyekFxuICogQHJldHVybiB7c3RyaW5nfSDspJHshLFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKCFpc0hhbmd1bChzdHIsIDEpKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5jaGFyQXQoMCkgOiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBWT1dFTFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgLyAyOCldO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdm93ZWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAn44WPJyxcbiAgICAn44WQJyxcbiAgICAn44WRJyxcbiAgICAn44WSJyxcbiAgICAn44WTJyxcbiAgICAn44WUJyxcbiAgICAn44WVJyxcbiAgICAn44WWJyxcbiAgICAn44WXJyxcbiAgICAn44WYJyxcbiAgICAn44WZJyxcbiAgICAn44WaJyxcbiAgICAn44WbJyxcbiAgICAn44WcJyxcbiAgICAn44WdJyxcbiAgICAn44WeJyxcbiAgICAn44WfJyxcbiAgICAn44WgJyxcbiAgICAn44WhJyxcbiAgICAn44WiJyxcbiAgICAn44WjJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvdm93ZWxzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCBGSU5BTF9DT05TT05BTlRTIGZyb20gJy4vdmFycy9maW5hbENvbnNvbmFudHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7KKF7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOyiheyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0cjtcbiAgICB9XG4gICAgcmV0dXJuIEZJTkFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgJSAyOCldO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICAnJyxcbiAgICAn44SxJyxcbiAgICAn44SyJyxcbiAgICAn44SzJyxcbiAgICAn44S0JyxcbiAgICAn44S1JyxcbiAgICAn44S2JyxcbiAgICAn44S3JyxcbiAgICAn44S5JyxcbiAgICAn44S6JyxcbiAgICAn44S7JyxcbiAgICAn44S8JyxcbiAgICAn44S9JyxcbiAgICAn44S+JyxcbiAgICAn44S/JyxcbiAgICAn44WAJyxcbiAgICAn44WBJyxcbiAgICAn44WCJyxcbiAgICAn44WEJyxcbiAgICAn44WFJyxcbiAgICAn44WGJyxcbiAgICAn44WHJyxcbiAgICAn44WIJyxcbiAgICAn44WKJyxcbiAgICAn44WLJyxcbiAgICAn44WMJyxcbiAgICAn44WNJyxcbiAgICAn44WOJ1xuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvZmluYWxDb25zb25hbnRzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCB1bmRlciBmcm9tICcuL3VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzrrLjsnpDsnZgg7KKF7ISx7J2YIOycoOustOulvCDqsoDsgqztlZzri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtib29sZWFufSDsooXshLHsnZgg7Jyg66y0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBpc0hhbmd1bChzdHIsIDEpICYmIHVuZGVyKHN0cikgIT09ICcnO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGFzVW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBoYXNVbmRlciBmcm9tICcuL2hhc1VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnZgg66eI7KeA66eJIOusuOyekOydmCDsooXshLEg7Jyg66y066W8IOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOuniOyngOuniSDrrLjsnpDsnZgg7KKF7ISxIOycoOustFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBoYXNVbmRlcihzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oYXNMYXN0VW5kZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBOVU1CRVJTIGZyb20gJy4vdmFycy9udW1iZXJzJ1xuaW1wb3J0IExBUkdFX05VTUJFUlMgZnJvbSAnLi92YXJzL2xhcmdlTnVtYmVycydcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g7Iir7J6Q66W8IO2VnOq4gO2YleyLneycvOuhnCDrsJTqv5TspIDri6RcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIOyIq+yekFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxpbWl0ZXJdIOuLqOychCDqtazrtoTsnpBcbiAqIEByZXR1cm4ge3N0cmluZ30g7ZWc6riA7Iir7J6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG51bWJlciwgZGVsaW1pdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCInbnVtYmVyJyBpcyB1bmRlZmluZWRcIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKCEvXlswLTldKyQvLnRlc3QobnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyLmNoYXJBdCgwKSA9PT0gJzAnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobnVtYmVyLmNoYXJBdChpKSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyaW5nKGkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG51bWJlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIE5VTUJFUlNbMF07XG4gICAgfVxuICAgIGlmIChudW1iZXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBOVU1CRVJTW251bWJlci5jaGFyQXQoMCldO1xuICAgIH1cbiAgICBsZXQgc3BsaXRlZE51bWJlcnMgPSBudW1iZXIuc3BsaXQoJycpLm1hcChhID0+IHBhcnNlSW50KGEpKTtcbiAgICBsZXQgcmV2ZXJzZWROdW1iZXJzID0gc3BsaXRlZE51bWJlcnMucmV2ZXJzZSgpO1xuICAgIGxldCBncm91cGVkTnVtYmVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2ZXJzZWROdW1iZXJzLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGdyb3VwZWROdW1iZXJzLnB1c2gocmV2ZXJzZWROdW1iZXJzLnNsaWNlKGksIGkgKyA0KSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cGVkTnVtYmVycy5tYXAoKG51bXMsIGkpID0+IHtcbiAgICAgICAgbGV0IGhudW1zID0gbnVtcy5tYXAoKG4sIGopID0+IHtcbiAgICAgICAgICAgIGxldCBobnVtID0gKG4gPiAxIHx8IGogPT09IDAgJiYgbiA9PT0gMSkgPyBOVU1CRVJTW25dIDogJyc7XG4gICAgICAgICAgICBsZXQgdW5pdCA9IChuID4gMCAmJiBqID4gMCkgPyBMQVJHRV9OVU1CRVJTWzBdW2ogLSAxXSA6ICcnO1xuICAgICAgICAgICAgcmV0dXJuIGhudW0gKyB1bml0O1xuICAgICAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGIgKyBhKTtcbiAgICAgICAgbGV0IGx1bml0ID0gKGkgPiAwICYmIGhudW1zLmxlbmd0aCA+IDApID8gTEFSR0VfTlVNQkVSU1sxXVsoaSAtIDEpICUgNF0gOiAnJztcbiAgICAgICAgcmV0dXJuIGhudW1zICsgbHVuaXQ7XG4gICAgfSkuZmlsdGVyKGEgPT4gYS5sZW5ndGggPiAwKS5yZWR1Y2UoKGEsIGIpID0+IGIgKyAoZGVsaW1pdGVyIHx8ICcnKSArIGEpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZm9ybWF0TnVtYmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgJ+yYgScsXG4gICAgJ+ydvCcsXG4gICAgJ+ydtCcsXG4gICAgJ+yCvCcsXG4gICAgJ+yCrCcsXG4gICAgJ+yYpCcsXG4gICAgJ+ycoScsXG4gICAgJ+y5oCcsXG4gICAgJ+2MlCcsXG4gICAgJ+q1rCdcbl07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YXJzL251bWJlcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgICBbJ+yLrScsICfrsLEnLCAn7LKcJ10sXG4gICAgWyfrp4wnLCAn7Ja1JywgJ+yhsCcsICfqsr0nXVxuXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==