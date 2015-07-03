# JavaScript Hangul Utility

## Example use

```html
<!DOCTYPE html>
<html>
<head>
<script src="hangul.min.js"></script>
</head>
<body>
<script>
'한글'.isHangul();
'한글'.hangulInitial();
'한글'.hangulVowel();
'한글'.hangulUnder();
'한글'.hasHangulUnder();
'한글'.hasLastHangulUnder();
Number(123456789).toHangul(' ');
</script>
</body>
</html>
```
