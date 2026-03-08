import NUMBERS from './vars/numbers'
import LARGE_NUMBERS from './vars/large-numbers'

/**
 * 숫자를 한글형식으로 바꿔준다
 */
export default function formatNumber(number: string | number, delimiter?: string): string {
  if (typeof number === 'undefined') {
    throw new TypeError("'number' is undefined")
  }
  let numStr = typeof number !== 'string' ? number.toString() : number
  if (!/^[0-9]+$/.test(numStr)) {
    return numStr
  }
  if (numStr.charAt(0) === '0') {
    const stripped = numStr.replace(/^0+/, '')
    if (stripped.length === 0) {
      return NUMBERS[0]
    }
    numStr = stripped
  }
  if (numStr.length === 1) {
    return NUMBERS[parseInt(numStr.charAt(0))]
  }
  const splitedNumbers = numStr.split('').map((a) => parseInt(a))
  const reversedNumbers = splitedNumbers.reverse()
  const groupedNumbers: number[][] = []
  for (let i = 0; i < reversedNumbers.length; i += 4) {
    groupedNumbers.push(reversedNumbers.slice(i, i + 4))
  }
  return groupedNumbers
    .map((nums, i) => {
      const hnums = nums
        .map((n, j) => {
          const hnum = n > 1 || (j === 0 && n === 1) ? NUMBERS[n] : ''
          const unit = n > 0 && j > 0 ? LARGE_NUMBERS[0][j - 1] : ''
          return hnum + unit
        })
        .reduce((a, b) => b + a)
      const lunit = i > 0 && hnums.length > 0 ? LARGE_NUMBERS[1][(i - 1) % 4] : ''
      return hnums + lunit
    })
    .filter((a) => a.length > 0)
    .reduce((a, b) => b + (delimiter || '') + a)
}
