'use strict';

import isHangul from './isHangul'
import INITIAL_CONSONANTS from './vars/initialConsonants'

/**
 * @description 한글 한문자에서 초성을 분리해서 가져온다
 * @param {string} str 문자
 * @return {string} 초성
 */
export default function(str) {
    if (!isHangul(str, 1)) {
        return typeof str === 'string' ? str.charAt(0) : str;
    }
    return INITIAL_CONSONANTS[parseInt(((str.charCodeAt(0) & 0xFFFF) - 0xAC00) / (21 * 28))];
}
