import isHangul from './is-hangul'
import VOWELS from './vars/vowels'

/**
 * 한글 한문자에서 중성을 분리해서 가져온다
 */
export default function vowel(str: string): string {
  if (!isHangul(str, 1)) {
    return typeof str === 'string' ? str.charAt(0) : str
  }
  return VOWELS[Math.floor((((str.charCodeAt(0) & 0xffff) - 0xac00) % (21 * 28)) / 28)]
}
