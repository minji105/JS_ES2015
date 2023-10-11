console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);

var x = 1;
x++;
console.log(x);
console.log(--x);

x = 5;
var result;

result = x++;
console.log(result, x);

result = ++x;
console.log(result, x);

// 숫자 타입이 아닌 피연산자에 +, - 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환
x = '1';

console.log(typeof +x);
console.log(typeof x);

x = true;
console.log(+x);
console.log(x);

x = false;
console.log(+x);
console.log(x);

x = 'hello'
console.log(+x);   // 숫자로 타입 변환할 수 없으므로 NaN 반환
console.log(x);

console.log(-(-10));
console.log(-'10');
console.log(-true);
console.log(-'hello');

console.log('1' + 2, 1 + '2');  // 피연산자 중하나 이상이 문자열인 경우 문자열 연결 연산자로 동작
console.log(1 + true);
console.log(false + 1);
console.log(1 + null);
console.log(+undefined);   // undefined는 숫자로 타입 변환되지 않음