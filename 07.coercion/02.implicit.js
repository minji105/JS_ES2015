// 암묵적 타입 변환

var x = 10;
var str = x + '';
console.log(typeof str, str);
console.log(typeof x, x);

console.log('10' + 2);
console.log(5 * '10');
console.log(-Infinity + '');
console.log(({}) + '');
console.log(Math + '');
console.log([1, 2] + '');

console.log(1 / 'one');     // 피연산자를 숫자 타입으로 변환할 수 없는 경우 NaN
console.log('1' > 0);
console.log(+'null');
console.log(+{});
console.log(+[], +[1, 2]);

if (!'') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');
if (!undefined) console.log('6');

function isFalsy(v) {
    return !v;
}

function isTruly(v) {
    return !!v;
}

console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isTruly(true));
console.log(isTruly('0'));  // 빈 문자열이 아닌 문자열은 Truly 값이다
console.log(isTruly({}));
console.log(isTruly([]));

if ([]) console.log('10');
