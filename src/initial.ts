import isHangul from './is-hangul'
import INITIAL_CONSONANTS from './vars/initial-consonants'

/**
 * 한글 한문자에서 초성을 분리해서 가져온다
 */
export default function initial(str: string): string {
  if (!isHangul(str, 1)) {
    return typeof str === 'string' ? str.charAt(0) : str
  }
  return INITIAL_CONSONANTS[Math.floor(((str.charCodeAt(0) & 0xffff) - 0xac00) / (21 * 28))]
}
