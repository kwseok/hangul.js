import isHangul from './is-hangul'
import under from './under'

/**
 * 한문자의 종성의 유무를 검사한다
 */
export default function hasUnder(str: string): boolean {
  return isHangul(str, 1) && under(str) !== ''
}
