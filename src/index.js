import isHangul from './isHangul'
import initial from './initial'
import vowel from './vowel'
import under from './under'
import hasUnder from './hasUnder'
import hasLastUnder from './hasLastUnder'
import formatNumber from './formatNumber'

export {
  isHangul,
  initial,
  vowel,
  under,
  hasUnder,
  hasLastUnder,
  formatNumber,
}

export default {
  is: isHangul,
  initial: initial,
  vowel: vowel,
  under: under,
  hasUnder: hasUnder,
  hasLastUnder: hasLastUnder,
  formatNumber: formatNumber
}

String.prototype.isHangul = function (len) {
  return isHangul(this.toString(), len)
}

String.prototype.hangulInitial = function () {
  return initial(this.toString())
}

String.prototype.hangulVowel = function () {
  return vowel(this.toString())
}

String.prototype.hangulUnder = function () {
  return under(this.toString())
}

String.prototype.hasHangulUnder = function () {
  return hasUnder(this.toString())
}

String.prototype.hasLastHangulUnder = function () {
  return hasLastUnder(this.toString())
}

String.prototype.toHangulNumber = function (delimiter) {
  return formatNumber(this.toString(), delimiter)
}

Number.prototype.toHangul = function (delimiter) {
  return formatNumber(this.toString(), delimiter)
}
