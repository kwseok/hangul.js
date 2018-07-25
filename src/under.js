import isHangul from './isHangul'
import FINAL_CONSONANTS from './vars/finalConsonants'

/**
 * @description 한글 한문자에서 종성을 분리해서 가져온다
 * @param {string} str 문자
 * @return {string} 종성
 */
export default function (str) {
  if (!isHangul(str, 1)) {
    return typeof str === 'string' ? str.charAt(0) : str
  }
  // noinspection JSCheckFunctionSignatures
  return FINAL_CONSONANTS[parseInt((((str.charCodeAt(0) & 0xFFFF) - 0xAC00) % (21 * 28)) % 28)]
}
