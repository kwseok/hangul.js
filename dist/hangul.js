!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.hangul=n():t.hangul=n()}(this,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";r.r(n),r.d(n,"isHangul",(function(){return e})),r.d(n,"initial",(function(){return u})),r.d(n,"vowel",(function(){return f})),r.d(n,"under",(function(){return c})),r.d(n,"hasUnder",(function(){return l})),r.d(n,"hasLastUnder",(function(){return p})),r.d(n,"formatNumber",(function(){return d}));var e=function(t,n){if("string"!=typeof t||0===t.length)return!1;(!n||n<0||n>t.length)&&(n=t.length);for(var r=0;r<n;r++){var e=t.charCodeAt(r);if(e<44032||e>55203)return!1}return!0},o=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],u=function(t){return e(t,1)?o[parseInt(((65535&t.charCodeAt(0))-44032)/588)]:"string"==typeof t?t.charAt(0):t},i=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"],f=function(t){return e(t,1)?i[parseInt(((65535&t.charCodeAt(0))-44032)%588/28)]:"string"==typeof t?t.charAt(0):t},a=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],c=function(t){return e(t,1)?a[parseInt(((65535&t.charCodeAt(0))-44032)%588%28)]:"string"==typeof t?t.charAt(0):t},l=function(t){return e(t,1)&&""!==c(t)},p=function(t){return"string"==typeof t&&0!==t.length&&l(t.charAt(t.length-1))},s=["영","일","이","삼","사","오","육","칠","팔","구"],g=[["십","백","천"],["만","억","조","경"]],d=function(t,n){if(void 0===t)throw new TypeError("'number' is undefined");if("string"!=typeof t&&(t=t.toString()),!/^[0-9]+$/.test(t))return t;if("0"===t.charAt(0))for(var r=1;r<t.length;r++)if("0"!==t.charAt(r)){t=t.substring(r);break}if(0===t.length)return s[0];if(1===t.length)return s[t.charAt(0)];for(var e=t.split("").map((function(t){return parseInt(t)})).reverse(),o=[],u=0;u<e.length;u+=4)o.push(e.slice(u,u+4));return o.map((function(t,n){var r=t.map((function(t,n){return(t>1||0===n&&1===t?s[t]:"")+(t>0&&n>0?g[0][n-1]:"")})).reduce((function(t,n){return n+t}));return r+(n>0&&r.length>0?g[1][(n-1)%4]:"")})).filter((function(t){return t.length>0})).reduce((function(t,r){return r+(n||"")+t}))};n.default={is:e,initial:u,vowel:f,under:c,hasUnder:l,hasLastUnder:p,formatNumber:d};String.prototype.isHangul=function(t){return e(this.toString(),t)},String.prototype.hangulInitial=function(){return u(this.toString())},String.prototype.hangulVowel=function(){return f(this.toString())},String.prototype.hangulUnder=function(){return c(this.toString())},String.prototype.hasHangulUnder=function(){return l(this.toString())},String.prototype.hasLastHangulUnder=function(){return p(this.toString())},String.prototype.toHangulNumber=function(t){return d(this.toString(),t)},Number.prototype.toHangul=function(t){return d(this.toString(),t)}}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5ndWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2hhbmd1bC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oYW5ndWwvLi9zcmMvaXNIYW5ndWwuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL3ZhcnMvaW5pdGlhbENvbnNvbmFudHMuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL3ZhcnMvdm93ZWxzLmpzIiwid2VicGFjazovL2hhbmd1bC8uL3NyYy92b3dlbC5qcyIsIndlYnBhY2s6Ly9oYW5ndWwvLi9zcmMvdmFycy9maW5hbENvbnNvbmFudHMuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL3VuZGVyLmpzIiwid2VicGFjazovL2hhbmd1bC8uL3NyYy9oYXNVbmRlci5qcyIsIndlYnBhY2s6Ly9oYW5ndWwvLi9zcmMvaGFzTGFzdFVuZGVyLmpzIiwid2VicGFjazovL2hhbmd1bC8uL3NyYy92YXJzL251bWJlcnMuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL3ZhcnMvbGFyZ2VOdW1iZXJzLmpzIiwid2VicGFjazovL2hhbmd1bC8uL3NyYy9mb3JtYXROdW1iZXIuanMiLCJ3ZWJwYWNrOi8vaGFuZ3VsLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInRoaXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwic3RyIiwibGVuIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzSGFuZ3VsIiwiSU5JVElBTF9DT05TT05BTlRTIiwicGFyc2VJbnQiLCJjaGFyQXQiLCJWT1dFTFMiLCJGSU5BTF9DT05TT05BTlRTIiwidW5kZXIiLCJoYXNVbmRlciIsIm51bWJlciIsImRlbGltaXRlciIsIlR5cGVFcnJvciIsInRvU3RyaW5nIiwidGVzdCIsInN1YnN0cmluZyIsIk5VTUJFUlMiLCJyZXZlcnNlZE51bWJlcnMiLCJzcGxpdCIsIm1hcCIsImEiLCJyZXZlcnNlIiwiZ3JvdXBlZE51bWJlcnMiLCJwdXNoIiwic2xpY2UiLCJudW1zIiwiaG51bXMiLCJqIiwiTEFSR0VfTlVNQkVSUyIsInJlZHVjZSIsImIiLCJmaWx0ZXIiLCJpcyIsImluaXRpYWwiLCJ2b3dlbCIsImhhc0xhc3RVbmRlciIsImZvcm1hdE51bWJlciIsIlN0cmluZyIsImhhbmd1bEluaXRpYWwiLCJoYW5ndWxWb3dlbCIsImhhbmd1bFVuZGVyIiwiaGFzSGFuZ3VsVW5kZXIiLCJoYXNMYXN0SGFuZ3VsVW5kZXIiLCJ0b0hhbmd1bE51bWJlciIsIk51bWJlciIsInRvSGFuZ3VsIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDMUIsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsSUFDUSxtQkFBWEcsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLEdBQUlILEdBQ2UsaUJBQVpDLFFBQ2RBLFFBQWdCLE9BQUlELElBRXBCRCxFQUFhLE9BQUlDLElBUm5CLENBU0dLLE1BQU0sV0FDVCxPLFlDVEUsSUFBSUMsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVVAsUUFH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LE9BQU9oQyxFQUFNOUMsS0FBS21ELGFBR3BCd0IsT0FBTzNDLFVBQVUrQyxlQUFpQixXQUNoQyxPQUFPaEMsRUFBUy9DLEtBQUttRCxhQUd2QndCLE9BQU8zQyxVQUFVZ0QsbUJBQXFCLFdBQ3BDLE9BQU9QLEVBQWF6RSxLQUFLbUQsYUFHM0J3QixPQUFPM0MsVUFBVWlELGVBQWlCLFNBQVVoQyxHQUMxQyxPQUFPeUIsRUFBYTFFLEtBQUttRCxXQUFZRixJQUd2Q2lDLE9BQU9sRCxVQUFVbUQsU0FBVyxTQUFVbEMsR0FDcEMsT0FBT3lCLEVBQWExRSxLQUFLbUQsV0FBWUYiLCJmaWxlIjoiaGFuZ3VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaGFuZ3VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImhhbmd1bFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIOusuOyekOyXtOydtCDtlZzquIDsnbjsp4Ag6rKA7IKs7ZWc64ukXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOusuOyekOyXtFxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5dIOqygOyCrOq4uOydtFxuICogQHJldHVybiB7Ym9vbGVhbn0g6rKA7IKs6rKw6rO8XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHIsIGxlbikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmICghbGVuIHx8IGxlbiA8IDAgfHwgbGVuID4gc3RyLmxlbmd0aCkge1xuICAgIGxlbiA9IHN0ci5sZW5ndGhcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChjIDwgMHhBQzAwIHx8IGMgPiAweEQ3QTMpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgWyfjhLEnLCAn44SyJywgJ+OEtCcsICfjhLcnLCAn44S4JywgJ+OEuScsICfjhYEnLCAn44WCJywgJ+OFgycsICfjhYUnLCAn44WGJywgJ+OFhycsICfjhYgnLCAn44WJJywgJ+OFiicsICfjhYsnLCAn44WMJywgJ+OFjScsICfjhY4nXVxuIiwiaW1wb3J0IGlzSGFuZ3VsIGZyb20gJy4vaXNIYW5ndWwnXG5pbXBvcnQgSU5JVElBTF9DT05TT05BTlRTIGZyb20gJy4vdmFycy9pbml0aWFsQ29uc29uYW50cydcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g7ZWc6riAIO2VnOusuOyekOyXkOyEnCDstIjshLHsnYQg67aE66as7ZW07IScIOqwgOyguOyYqOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpBcbiAqIEByZXR1cm4ge3N0cmluZ30g7LSI7ISxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHIpIHtcbiAgaWYgKCFpc0hhbmd1bChzdHIsIDEpKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyLmNoYXJBdCgwKSA6IHN0clxuICB9XG4gIC8vIG5vaW5zcGVjdGlvbiBKU0NoZWNrRnVuY3Rpb25TaWduYXR1cmVzXG4gIHJldHVybiBJTklUSUFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKChzdHIuY2hhckNvZGVBdCgwKSAmIDB4RkZGRikgLSAweEFDMDApIC8gKDIxICogMjgpKV1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFsn44WPJywgJ+OFkCcsICfjhZEnLCAn44WSJywgJ+OFkycsICfjhZQnLCAn44WVJywgJ+OFlicsICfjhZcnLCAn44WYJywgJ+OFmScsICfjhZonLCAn44WbJywgJ+OFnCcsICfjhZ0nLCAn44WeJywgJ+OFnycsICfjhaAnLCAn44WhJywgJ+OFoicsICfjhaMnXVxuIiwiaW1wb3J0IGlzSGFuZ3VsIGZyb20gJy4vaXNIYW5ndWwnXG5pbXBvcnQgVk9XRUxTIGZyb20gJy4vdmFycy92b3dlbHMnXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIO2VnOq4gCDtlZzrrLjsnpDsl5DshJwg7KSR7ISx7J2EIOu2hOumrO2VtOyEnCDqsIDsoLjsmKjri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtzdHJpbmd9IOykkeyEsVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RyKSB7XG4gIGlmICghaXNIYW5ndWwoc3RyLCAxKSkge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHN0ci5jaGFyQXQoMCkgOiBzdHJcbiAgfVxuICAvLyBub2luc3BlY3Rpb24gSlNDaGVja0Z1bmN0aW9uU2lnbmF0dXJlc1xuICByZXR1cm4gVk9XRUxTW3BhcnNlSW50KCgoKHN0ci5jaGFyQ29kZUF0KDApICYgMHhGRkZGKSAtIDB4QUMwMCkgJSAoMjEgKiAyOCkpIC8gMjgpXVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgWycnLCAn44SxJywgJ+OEsicsICfjhLMnLCAn44S0JywgJ+OEtScsICfjhLYnLCAn44S3JywgJ+OEuScsICfjhLonLCAn44S7JywgJ+OEvCcsICfjhL0nLCAn44S+JywgJ+OEvycsICfjhYAnLCAn44WBJywgJ+OFgicsICfjhYQnLCAn44WFJywgJ+OFhicsICfjhYcnLCAn44WIJywgJ+OFiicsICfjhYsnLCAn44WMJywgJ+OFjScsICfjhY4nXVxuIiwiaW1wb3J0IGlzSGFuZ3VsIGZyb20gJy4vaXNIYW5ndWwnXG5pbXBvcnQgRklOQUxfQ09OU09OQU5UUyBmcm9tICcuL3ZhcnMvZmluYWxDb25zb25hbnRzJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzquIAg7ZWc66y47J6Q7JeQ7IScIOyiheyEseydhCDrtoTrpqztlbTshJwg6rCA7KC47Jio64ukXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIOusuOyekFxuICogQHJldHVybiB7c3RyaW5nfSDsooXshLFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0cikge1xuICBpZiAoIWlzSGFuZ3VsKHN0ciwgMSkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBzdHIuY2hhckF0KDApIDogc3RyXG4gIH1cbiAgLy8gbm9pbnNwZWN0aW9uIEpTQ2hlY2tGdW5jdGlvblNpZ25hdHVyZXNcbiAgcmV0dXJuIEZJTkFMX0NPTlNPTkFOVFNbcGFyc2VJbnQoKCgoc3RyLmNoYXJDb2RlQXQoMCkgJiAweEZGRkYpIC0gMHhBQzAwKSAlICgyMSAqIDI4KSkgJSAyOCldXG59XG4iLCJpbXBvcnQgaXNIYW5ndWwgZnJvbSAnLi9pc0hhbmd1bCdcbmltcG9ydCB1bmRlciBmcm9tICcuL3VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDtlZzrrLjsnpDsnZgg7KKF7ISx7J2YIOycoOustOulvCDqsoDsgqztlZzri6RcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIg66y47J6QXG4gKiBAcmV0dXJuIHtib29sZWFufSDsooXshLHsnZgg7Jyg66y0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIGlzSGFuZ3VsKHN0ciwgMSkgJiYgdW5kZXIoc3RyKSAhPT0gJydcbn1cbiIsImltcG9ydCBoYXNVbmRlciBmcm9tICcuL2hhc1VuZGVyJ1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDrrLjsnpDsl7TsnZgg66eI7KeA66eJIOusuOyekOydmCDsooXshLEg7Jyg66y066W8IOqygOyCrO2VnOuLpFxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciDrrLjsnpDsl7RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IOuniOyngOuniSDrrLjsnpDsnZgg7KKF7ISxIOycoOustFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGhhc1VuZGVyKHN0ci5jaGFyQXQoc3RyLmxlbmd0aCAtIDEpKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgWyfsmIEnLCAn7J28JywgJ+ydtCcsICfsgrwnLCAn7IKsJywgJ+yYpCcsICfsnKEnLCAn7LmgJywgJ+2MlCcsICfqtawnXVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICBbJ+yLrScsICfrsLEnLCAn7LKcJ10sXG4gIFsn66eMJywgJ+yWtScsICfsobAnLCAn6rK9J11cbl1cbiIsImltcG9ydCBOVU1CRVJTIGZyb20gJy4vdmFycy9udW1iZXJzJ1xuaW1wb3J0IExBUkdFX05VTUJFUlMgZnJvbSAnLi92YXJzL2xhcmdlTnVtYmVycydcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g7Iir7J6Q66W8IO2VnOq4gO2YleyLneycvOuhnCDrsJTqv5TspIDri6RcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIOyIq+yekFxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWxpbWl0ZXJdIOuLqOychCDqtazrtoTsnpBcbiAqIEByZXR1cm4ge3N0cmluZ30g7ZWc6riA7Iir7J6QXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChudW1iZXIsIGRlbGltaXRlcikge1xuICBpZiAodHlwZW9mIG51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcXCdudW1iZXJcXCcgaXMgdW5kZWZpbmVkJylcbiAgfVxuICBpZiAodHlwZW9mIG51bWJlciAhPT0gJ3N0cmluZycpIHtcbiAgICBudW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKVxuICB9XG4gIGlmICghL15bMC05XSskLy50ZXN0KG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyXG4gIH1cbiAgaWYgKG51bWJlci5jaGFyQXQoMCkgPT09ICcwJykge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtYmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobnVtYmVyLmNoYXJBdChpKSA9PT0gJzAnKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBudW1iZXIgPSBudW1iZXIuc3Vic3RyaW5nKGkpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBpZiAobnVtYmVyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBOVU1CRVJTWzBdXG4gIH1cbiAgaWYgKG51bWJlci5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gTlVNQkVSU1tudW1iZXIuY2hhckF0KDApXVxuICB9XG4gIGxldCBzcGxpdGVkTnVtYmVycyA9IG51bWJlci5zcGxpdCgnJykubWFwKGEgPT4gcGFyc2VJbnQoYSkpXG4gIGxldCByZXZlcnNlZE51bWJlcnMgPSBzcGxpdGVkTnVtYmVycy5yZXZlcnNlKClcbiAgbGV0IGdyb3VwZWROdW1iZXJzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZlcnNlZE51bWJlcnMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICBncm91cGVkTnVtYmVycy5wdXNoKHJldmVyc2VkTnVtYmVycy5zbGljZShpLCBpICsgNCkpXG4gIH1cbiAgcmV0dXJuIGdyb3VwZWROdW1iZXJzLm1hcCgobnVtcywgaSkgPT4ge1xuICAgIGxldCBobnVtcyA9IG51bXMubWFwKChuLCBqKSA9PiB7XG4gICAgICBsZXQgaG51bSA9IChuID4gMSB8fCBqID09PSAwICYmIG4gPT09IDEpID8gTlVNQkVSU1tuXSA6ICcnXG4gICAgICBsZXQgdW5pdCA9IChuID4gMCAmJiBqID4gMCkgPyBMQVJHRV9OVU1CRVJTWzBdW2ogLSAxXSA6ICcnXG4gICAgICByZXR1cm4gaG51bSArIHVuaXRcbiAgICB9KS5yZWR1Y2UoKGEsIGIpID0+IGIgKyBhKVxuICAgIGxldCBsdW5pdCA9IChpID4gMCAmJiBobnVtcy5sZW5ndGggPiAwKSA/IExBUkdFX05VTUJFUlNbMV1bKGkgLSAxKSAlIDRdIDogJydcbiAgICByZXR1cm4gaG51bXMgKyBsdW5pdFxuICB9KS5maWx0ZXIoYSA9PiBhLmxlbmd0aCA+IDApLnJlZHVjZSgoYSwgYikgPT4gYiArIChkZWxpbWl0ZXIgfHwgJycpICsgYSlcbn1cbiIsImltcG9ydCBpc0hhbmd1bCBmcm9tICcuL2lzSGFuZ3VsJ1xuaW1wb3J0IGluaXRpYWwgZnJvbSAnLi9pbml0aWFsJ1xuaW1wb3J0IHZvd2VsIGZyb20gJy4vdm93ZWwnXG5pbXBvcnQgdW5kZXIgZnJvbSAnLi91bmRlcidcbmltcG9ydCBoYXNVbmRlciBmcm9tICcuL2hhc1VuZGVyJ1xuaW1wb3J0IGhhc0xhc3RVbmRlciBmcm9tICcuL2hhc0xhc3RVbmRlcidcbmltcG9ydCBmb3JtYXROdW1iZXIgZnJvbSAnLi9mb3JtYXROdW1iZXInXG5cbmV4cG9ydCB7XG4gIGlzSGFuZ3VsLFxuICBpbml0aWFsLFxuICB2b3dlbCxcbiAgdW5kZXIsXG4gIGhhc1VuZGVyLFxuICBoYXNMYXN0VW5kZXIsXG4gIGZvcm1hdE51bWJlcixcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpczogaXNIYW5ndWwsXG4gIGluaXRpYWw6IGluaXRpYWwsXG4gIHZvd2VsOiB2b3dlbCxcbiAgdW5kZXI6IHVuZGVyLFxuICBoYXNVbmRlcjogaGFzVW5kZXIsXG4gIGhhc0xhc3RVbmRlcjogaGFzTGFzdFVuZGVyLFxuICBmb3JtYXROdW1iZXI6IGZvcm1hdE51bWJlclxufVxuXG5TdHJpbmcucHJvdG90eXBlLmlzSGFuZ3VsID0gZnVuY3Rpb24gKGxlbikge1xuICByZXR1cm4gaXNIYW5ndWwodGhpcy50b1N0cmluZygpLCBsZW4pXG59XG5cblN0cmluZy5wcm90b3R5cGUuaGFuZ3VsSW5pdGlhbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGluaXRpYWwodGhpcy50b1N0cmluZygpKVxufVxuXG5TdHJpbmcucHJvdG90eXBlLmhhbmd1bFZvd2VsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdm93ZWwodGhpcy50b1N0cmluZygpKVxufVxuXG5TdHJpbmcucHJvdG90eXBlLmhhbmd1bFVuZGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdW5kZXIodGhpcy50b1N0cmluZygpKVxufVxuXG5TdHJpbmcucHJvdG90eXBlLmhhc0hhbmd1bFVuZGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaGFzVW5kZXIodGhpcy50b1N0cmluZygpKVxufVxuXG5TdHJpbmcucHJvdG90eXBlLmhhc0xhc3RIYW5ndWxVbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGhhc0xhc3RVbmRlcih0aGlzLnRvU3RyaW5nKCkpXG59XG5cblN0cmluZy5wcm90b3R5cGUudG9IYW5ndWxOdW1iZXIgPSBmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpXG59XG5cbk51bWJlci5wcm90b3R5cGUudG9IYW5ndWwgPSBmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG4gIHJldHVybiBmb3JtYXROdW1iZXIodGhpcy50b1N0cmluZygpLCBkZWxpbWl0ZXIpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9