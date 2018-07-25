/**
 * @description 문자열이 한글인지 검사한다
 * @param {string} str 문자열
 * @param {number} [len] 검사길이
 * @return {boolean} 검사결과
 */
export default function (str, len) {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }
  if (!len || len < 0 || len > str.length) {
    len = str.length
  }
  for (let i = 0; i < len; i++) {
    let c = str.charCodeAt(i)
    if (c < 0xAC00 || c > 0xD7A3) {
      return false
    }
  }
  return true
}
