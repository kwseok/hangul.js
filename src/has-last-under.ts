import hasUnder from './has-under'

/**
 * 문자열의 마지막 문자의 종성 유무를 검사한다
 */
export default function hasLastUnder(str: string): boolean {
  if (typeof str !== 'string' || str.length === 0) {
    return false
  }
  return hasUnder(str.charAt(str.length - 1))
}
