import isHangul from './is-hangul'
import FINAL_CONSONANTS from './vars/final-consonants'

/**
 * 한글 한문자에서 종성을 분리해서 가져온다
 */
export default function under(str: string): string {
  if (!isHangul(str, 1)) {
    return typeof str === 'string' ? str.charAt(0) : str
  }
  return FINAL_CONSONANTS[Math.floor((((str.charCodeAt(0) & 0xffff) - 0xac00) % (21 * 28)) % 28)]
}
