// 변경 불가. 다른 값과 중복x

var key = Symbol('key');
console.log(typeof key);

var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]);