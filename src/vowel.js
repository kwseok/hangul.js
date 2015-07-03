import isHangul from './isHangul'
import VOWELS from './vars/vowels'

/**
 * @description 한글 한문자에서 중성을 분리해서 가져온다
 * @param {string} str 문자
 * @return {string} 중성
 */
export default function(str) {
    if (!isHangul(str, 1)) {
        return typeof str === 'string' ? str.charAt(0) : str;
    }
    return VOWELS[parseInt((((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28)) / 28)];
}