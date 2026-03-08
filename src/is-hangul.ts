/**
 * 문자열이 한글인지 검사한다
 */
export default function isHangul(str: string, len?: number): boolean {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }
  if (!len || len < 0 || len > str.length) {
    len = str.length
  }
  for (let i = 0; i < len; i++) {
    const c = str.charCodeAt(i)
    if (c < 0xac00 || c > 0xd7a3) {
      return false
    }
  }
  return true
}
