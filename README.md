# Hangul JavaScript Utility [![Build Status](https://travis-ci.org/stonexx/hangul.js.svg?branch=master)](https://travis-ci.org/stonexx/hangul.js)

## Example use [Plunker](http://embed.plnkr.co/K8Yj0waWfJEJRirTEVC9/)

```html
<!DOCTYPE html>
<html>
<head>
<script src="//rawgit.com/stonexx/hangul.js/master/dist/hangul.js"></script>
</head>
<body>
<script>
document.write("'한글'.isHangul() === " + ('한글'.isHangul()) + "<br/>");
document.write("'한글'.hangulInitial() === " + ('한글'.hangulInitial()) + "<br/>");
document.write("'한글'.hangulVowel() === " + ('한글'.hangulVowel()) + "<br/>");
document.write("'한글'.hangulUnder() === " + ('한글'.hangulUnder()) + "<br/>");
document.write("'한글'.hasHangulUnder() === " + ('한글'.hasHangulUnder()) + "<br/>");
document.write("'한글'.hasLastHangulUnder() === " + ('한글'.hasLastHangulUnder()) + "<br/>");
document.write("Number(123456789).toHangul(' ') === " + (Number(123456789).toHangul(' ')) + "<br/>");
</script>
</body>
</html>
```
