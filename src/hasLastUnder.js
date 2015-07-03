import hasUnder from './hasUnder'

/**
 * @description 문자열의 마지막 문자의 종성 유무를 검사한다
 * @param {string} str 문자열
 * @return {boolean} 마지막 문자의 종성 유무
 */
export default function(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return false;
    }
    return hasUnder(str.charAt(str.length - 1));
}