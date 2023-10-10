var template = `Template literal`;
console.log(template);

// 일반 문자열 내에서는 공백을 사용하려면 이스케이프 시퀀스(\)를 사용해야함
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

// 템플릿 리터럴
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template);


var first = 'Min-ji';
var last = 'Jo';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}');