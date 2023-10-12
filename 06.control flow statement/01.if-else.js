var num = 0;
var kind;

if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영'
}
console.log(kind);

var x = 2;
var result;

if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}
console.log(result);

var result2 = x % 2 ? '홀수' : '짝수';
console.log(result2);

var n = 2;
var kind = n ? (n > 0 ? '양수' : '음수') : '영';
console.log(kind);