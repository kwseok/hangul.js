import NUMBERS from './vars/numbers'
import LARGE_NUMBERS from './vars/largeNumbers'

/**
 * @description 숫자를 한글형식으로 바꿔준다
 * @param {number|string} number 숫자
 * @param {string} [delimiter] 단위 구분자
 * @return {string} 한글숫자
 */
export default function(number, delimiter) {
    if (typeof number === 'undefined') {
        throw new TypeError("'number' is undefined");
    }
    if (typeof number !== 'string') {
        number = number.toString();
    }
    if (!/^[0-9]+$/.test(number)) {
        return number;
    }
    if (number.charAt(0) === '0') {
        for (let i = 1; i < number.length; i++) {
            if (number.charAt(i) === '0') {
                continue;
            }
            number = number.substring(i);
            break;
        }
    }
    if (number.length === 0) {
        return NUMBERS[0];
    }
    if (number.length === 1) {
        return NUMBERS[number.charAt(0)];
    }
    let splitedNumbers = number.split('').map(a => parseInt(a));
    let reversedNumbers = splitedNumbers.reverse();
    let groupedNumbers = [];
    for (let i = 0; i < reversedNumbers.length; i += 4) {
        groupedNumbers.push(reversedNumbers.slice(i, i + 4));
    }
    return groupedNumbers.map((nums, i) => {
        let hnums = nums.map((n, j) => {
            let hnum = (n > 1 || j === 0 && n === 1) ? NUMBERS[n] : '';
            let unit = (n > 0 && j > 0) ? LARGE_NUMBERS[0][j - 1] : '';
            return hnum + unit;
        }).reduce((a, b) => b + a);
        let lunit = (i > 0 && hnums.length > 0) ? LARGE_NUMBERS[1][(i - 1) % 4] : '';
        return hnums + lunit;
    }).filter(a => a.length > 0).reduce((a, b) => b + (delimiter || '') + a);
}