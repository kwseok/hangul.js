# hangul.js

한글 처리를 위한 JavaScript/TypeScript 유틸리티 라이브러리

## 설치

```bash
pnpm add hangul.js
# or
npm install hangul.js
```

## 사용법

```typescript
import hangul from 'hangul.js'
// 또는 개별 함수 import
import { isHangul, initial, vowel, under, hasUnder, hasLastUnder, formatNumber } from 'hangul.js'
```

## API

### `isHangul(str, len?)`

문자열이 한글인지 검사합니다.

```typescript
isHangul('한글')      // true
isHangul('abc')       // false
isHangul('한글abc', 2) // true (앞 2글자만 검사)
```

### `initial(str)`

첫 글자의 초성을 반환합니다.

```typescript
initial('가')  // 'ㄱ'
initial('한')  // 'ㅎ'
initial('a')   // 'a' (한글이 아니면 그대로 반환)
```

### `vowel(str)`

첫 글자의 중성(모음)을 반환합니다.

```typescript
vowel('가')  // 'ㅏ'
vowel('귀')  // 'ㅟ'
```

### `under(str)`

첫 글자의 종성(받침)을 반환합니다.

```typescript
under('강')  // 'ㅇ'
under('가')  // '' (종성 없음)
```

### `hasUnder(str)`

첫 글자에 종성이 있는지 검사합니다.

```typescript
hasUnder('강')  // true
hasUnder('가')  // false
```

### `hasLastUnder(str)`

문자열의 마지막 글자에 종성이 있는지 검사합니다. 조사 처리에 유용합니다.

```typescript
hasLastUnder('한글')  // true  → '한글은'
hasLastUnder('사과')  // false → '사과는'
```

### `formatNumber(number, delimiter?)`

숫자를 한글로 변환합니다.

```typescript
formatNumber(0)            // '영'
formatNumber(12345)        // '일만이천삼백사십오'
formatNumber(12345, ' ')   // '일만 이천삼백사십오'
formatNumber(100000000)    // '일억'
```

### default export

```typescript
import hangul from 'hangul.js'

hangul.is('한글')           // isHangul
hangul.initial('가')        // initial
hangul.vowel('가')          // vowel
hangul.under('강')          // under
hangul.hasUnder('강')       // hasUnder
hangul.hasLastUnder('한글') // hasLastUnder
hangul.formatNumber(123)    // formatNumber
```

## 개발

```bash
pnpm install    # 의존성 설치
pnpm run build  # 빌드
pnpm run test   # 테스트
pnpm run dev    # watch 모드
```

## 라이선스

MIT
