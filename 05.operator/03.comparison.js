console.log(5 == 5);
console.log(5 == '5');   // 암묵적 타입 변환
console.log(5 === '5');

// 안티 패턴(가독성, 성능, 유지보수 등 부정적 영향을 줄 수 있어 지양하는 패턴)
console.log('0' == '');
console.log(0 == '');
console.log(0 == '0');
console.log(false == 'false');
console.log(false == '0');

// NaN은 자신과 일치하지 않는 유일한 값
console.log(NaN === NaN);

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(10));
console.log(Number.isNaN(1 + undefined));

console.log(0 == -0);
console.log(0 === -0);
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));

console.log(5 > 0, 5 < 5, 5 >= 5, 5 <= 5);