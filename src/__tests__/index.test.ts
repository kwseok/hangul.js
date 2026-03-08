import { describe, expect, it } from 'vitest'
import hangul, { isHangul, initial, vowel, under, hasUnder, hasLastUnder, formatNumber } from '../index'

describe('isHangul', () => {
  it('한글 문자열을 판별한다', () => {
    expect(isHangul('가')).toBe(true)
    expect(isHangul('한글')).toBe(true)
    expect(isHangul('가나다라마바사')).toBe(true)
  })

  it('한글 범위의 경계값을 검사한다', () => {
    expect(isHangul('가')).toBe(true)   // 0xAC00 (첫 글자)
    expect(isHangul('힣')).toBe(true)   // 0xD7A3 (마지막 글자)
  })

  it('한글이 아닌 문자열을 거부한다', () => {
    expect(isHangul('abc')).toBe(false)
    expect(isHangul('123')).toBe(false)
    expect(isHangul('ㄱㄴㄷ')).toBe(false)  // 자음만
    expect(isHangul('ㅏㅓㅗ')).toBe(false)  // 모음만
    expect(isHangul(' ')).toBe(false)
    expect(isHangul('한글test')).toBe(false)
  })

  it('빈 문자열은 false를 반환한다', () => {
    expect(isHangul('')).toBe(false)
  })

  it('길이를 지정하여 검사한다', () => {
    expect(isHangul('한a', 1)).toBe(true)
    expect(isHangul('한a', 2)).toBe(false)
    expect(isHangul('한글abc', 2)).toBe(true)
    expect(isHangul('한글abc', 3)).toBe(false)
  })

  it('len이 음수이면 전체 문자열을 검사한다', () => {
    expect(isHangul('한글', -1)).toBe(true)
    expect(isHangul('한a', -1)).toBe(false)
  })

  it('len이 문자열 길이보다 크면 전체를 검사한다', () => {
    expect(isHangul('한글', 100)).toBe(true)
    expect(isHangul('한a', 100)).toBe(false)
  })

  it('len이 0이면 전체 문자열을 검사한다', () => {
    expect(isHangul('한글', 0)).toBe(true)
  })
})

describe('initial', () => {
  it('초성을 분리한다', () => {
    expect(initial('가')).toBe('ㄱ')
    expect(initial('나')).toBe('ㄴ')
    expect(initial('다')).toBe('ㄷ')
    expect(initial('라')).toBe('ㄹ')
    expect(initial('마')).toBe('ㅁ')
    expect(initial('바')).toBe('ㅂ')
    expect(initial('사')).toBe('ㅅ')
    expect(initial('아')).toBe('ㅇ')
    expect(initial('자')).toBe('ㅈ')
    expect(initial('차')).toBe('ㅊ')
    expect(initial('카')).toBe('ㅋ')
    expect(initial('타')).toBe('ㅌ')
    expect(initial('파')).toBe('ㅍ')
    expect(initial('하')).toBe('ㅎ')
  })

  it('쌍자음 초성을 분리한다', () => {
    expect(initial('까')).toBe('ㄲ')
    expect(initial('따')).toBe('ㄸ')
    expect(initial('빠')).toBe('ㅃ')
    expect(initial('싸')).toBe('ㅆ')
    expect(initial('짜')).toBe('ㅉ')
  })

  it('마지막 한글의 초성도 정상 동작한다', () => {
    expect(initial('힣')).toBe('ㅎ')
  })

  it('한글이 아니면 첫 글자를 반환한다', () => {
    expect(initial('a')).toBe('a')
    expect(initial('1')).toBe('1')
    expect(initial('!')).toBe('!')
    expect(initial('ㄱ')).toBe('ㄱ')  // 자음만 있는 경우
  })

  it('여러 글자 문자열은 첫 글자의 초성을 반환한다', () => {
    expect(initial('한글')).toBe('ㅎ')
    expect(initial('abc')).toBe('a')
  })
})

describe('vowel', () => {
  it('중성을 분리한다', () => {
    expect(vowel('가')).toBe('ㅏ')
    expect(vowel('거')).toBe('ㅓ')
    expect(vowel('고')).toBe('ㅗ')
    expect(vowel('구')).toBe('ㅜ')
    expect(vowel('그')).toBe('ㅡ')
    expect(vowel('기')).toBe('ㅣ')
  })

  it('복합 모음 중성을 분리한다', () => {
    expect(vowel('과')).toBe('ㅘ')
    expect(vowel('귀')).toBe('ㅟ')
    expect(vowel('의')).toBe('ㅢ')
    expect(vowel('궤')).toBe('ㅞ')
  })

  it('한글이 아니면 첫 글자를 반환한다', () => {
    expect(vowel('a')).toBe('a')
    expect(vowel('1')).toBe('1')
    expect(vowel('ㄱ')).toBe('ㄱ')
  })

  it('여러 글자 문자열은 첫 글자의 중성을 반환한다', () => {
    expect(vowel('한글')).toBe('ㅏ')
  })
})

describe('under', () => {
  it('종성을 분리한다', () => {
    expect(under('각')).toBe('ㄱ')
    expect(under('간')).toBe('ㄴ')
    expect(under('갈')).toBe('ㄹ')
    expect(under('감')).toBe('ㅁ')
    expect(under('강')).toBe('ㅇ')
    expect(under('갛')).toBe('ㅎ')
  })

  it('겹받침 종성을 분리한다', () => {
    expect(under('갃')).toBe('ㄳ')
    expect(under('갈')).toBe('ㄹ')
    expect(under('값')).toBe('ㅄ')
  })

  it('종성이 없으면 빈 문자열을 반환한다', () => {
    expect(under('가')).toBe('')
    expect(under('나')).toBe('')
    expect(under('하')).toBe('')
  })

  it('한글이 아니면 첫 글자를 반환한다', () => {
    expect(under('a')).toBe('a')
    expect(under('1')).toBe('1')
    expect(under('ㄱ')).toBe('ㄱ')
  })

  it('여러 글자 문자열은 첫 글자의 종성을 반환한다', () => {
    expect(under('한글')).toBe('ㄴ')
  })
})

describe('hasUnder', () => {
  it('종성이 있으면 true를 반환한다', () => {
    expect(hasUnder('강')).toBe(true)
    expect(hasUnder('한')).toBe(true)
    expect(hasUnder('글')).toBe(true)
    expect(hasUnder('값')).toBe(true)  // 겹받침
  })

  it('종성이 없으면 false를 반환한다', () => {
    expect(hasUnder('가')).toBe(false)
    expect(hasUnder('나')).toBe(false)
    expect(hasUnder('하')).toBe(false)
  })

  it('한글이 아니면 false를 반환한다', () => {
    expect(hasUnder('a')).toBe(false)
    expect(hasUnder('1')).toBe(false)
    expect(hasUnder('')).toBe(false)
    expect(hasUnder('ㄱ')).toBe(false)
  })
})

describe('hasLastUnder', () => {
  it('마지막 문자에 종성이 있으면 true를 반환한다', () => {
    expect(hasLastUnder('한글')).toBe(true)
    expect(hasLastUnder('대한민국')).toBe(true)
    expect(hasLastUnder('강')).toBe(true)
  })

  it('마지막 문자에 종성이 없으면 false를 반환한다', () => {
    expect(hasLastUnder('한가')).toBe(false)
    expect(hasLastUnder('사과')).toBe(false)
    expect(hasLastUnder('나')).toBe(false)
  })

  it('빈 문자열은 false를 반환한다', () => {
    expect(hasLastUnder('')).toBe(false)
  })

  it('마지막 문자가 한글이 아니면 false를 반환한다', () => {
    expect(hasLastUnder('한글a')).toBe(false)
    expect(hasLastUnder('test')).toBe(false)
    expect(hasLastUnder('123')).toBe(false)
  })
})

describe('formatNumber', () => {
  it('한 자리 숫자를 변환한다', () => {
    expect(formatNumber(0)).toBe('영')
    expect(formatNumber(1)).toBe('일')
    expect(formatNumber(5)).toBe('오')
    expect(formatNumber(9)).toBe('구')
  })

  it('두 자리 이상의 숫자를 변환한다', () => {
    expect(formatNumber(10)).toBe('십')
    expect(formatNumber(11)).toBe('십일')
    expect(formatNumber(20)).toBe('이십')
    expect(formatNumber(99)).toBe('구십구')
    expect(formatNumber(100)).toBe('백')
    expect(formatNumber(101)).toBe('백일')
    expect(formatNumber(110)).toBe('백십')
    expect(formatNumber(999)).toBe('구백구십구')
    expect(formatNumber(1000)).toBe('천')
    expect(formatNumber(1001)).toBe('천일')
  })

  it('만 단위 이상을 변환한다', () => {
    expect(formatNumber(10000)).toBe('일만')
    expect(formatNumber(10001)).toBe('일만일')
    expect(formatNumber(12345)).toBe('일만이천삼백사십오')
    expect(formatNumber(100000)).toBe('십만')
    expect(formatNumber(1000000)).toBe('백만')
    expect(formatNumber(10000000)).toBe('천만')
  })

  it('억 단위를 변환한다', () => {
    expect(formatNumber(100000000)).toBe('일억')
    expect(formatNumber(123456789)).toBe('일억이천삼백사십오만육천칠백팔십구')
  })

  it('조 단위를 변환한다', () => {
    expect(formatNumber(1000000000000)).toBe('일조')
  })

  it('중간에 0이 포함된 숫자를 변환한다', () => {
    expect(formatNumber(1001)).toBe('천일')
    expect(formatNumber(10010)).toBe('일만십')
    expect(formatNumber(100000001)).toBe('일억일')
  })

  it('구분자를 사용할 수 있다', () => {
    expect(formatNumber(12345, ' ')).toBe('일만 이천삼백사십오')
    expect(formatNumber(123456789, ' ')).toBe('일억 이천삼백사십오만 육천칠백팔십구')
  })

  it('문자열 숫자도 처리한다', () => {
    expect(formatNumber('100')).toBe('백')
    expect(formatNumber('0')).toBe('영')
    expect(formatNumber('12345')).toBe('일만이천삼백사십오')
  })

  it('앞에 0이 있는 문자열을 처리한다', () => {
    expect(formatNumber('007')).toBe('칠')
    expect(formatNumber('000')).toBe('영')
    expect(formatNumber('010')).toBe('십')
    expect(formatNumber('0100')).toBe('백')
  })

  it('숫자가 아닌 문자열은 그대로 반환한다', () => {
    expect(formatNumber('abc')).toBe('abc')
    expect(formatNumber('12a34')).toBe('12a34')
    expect(formatNumber('-1')).toBe('-1')
  })

  it('undefined를 전달하면 TypeError를 던진다', () => {
    // @ts-expect-error 테스트를 위해 undefined 전달
    expect(() => formatNumber(undefined)).toThrow(TypeError)
  })
})

describe('default export', () => {
  it('모든 함수를 포함한다', () => {
    expect(hangul.is).toBe(isHangul)
    expect(hangul.initial).toBe(initial)
    expect(hangul.vowel).toBe(vowel)
    expect(hangul.under).toBe(under)
    expect(hangul.hasUnder).toBe(hasUnder)
    expect(hangul.hasLastUnder).toBe(hasLastUnder)
    expect(hangul.formatNumber).toBe(formatNumber)
  })
})
