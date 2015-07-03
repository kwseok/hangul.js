import isHangul from './isHangul'
import under from './under'

/**
 * @description 한문자의 종성의 유무를 검사한다
 * @param {string} str 문자
 * @return {boolean} 종성의 유무
 */
export default function(str) {
    return isHangul(str, 1) && under(str) !== '';
}
