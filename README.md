# Hangul JavaScript Utility [![Build Status](https://travis-ci.org/stonexx/hangul.js.svg?branch=master)](https://travis-ci.org/stonexx/hangul.js)

## Example use

```html
<!DOCTYPE html>
<html>
<head>
<script src="hangul.min.js"></script>
</head>
<body>
<script>
'한글'.isHangul() === true;
'한글'.hangulInitial() === 'ㅎ';
'한글'.hangulVowel() === 'ㅏ';
'한글'.hangulUnder() === 'ㄴ';
'한글'.hasHangulUnder() === true;
'한글'.hasLastHangulUnder() === true;
Number(123456789).toHangul(' ') === '일억 이천삼백사십오만 육천칠백팔십구';
</script>
</body>
</html>
```
