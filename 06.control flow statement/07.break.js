foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('done!');

outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

// 문자열에서 특정 문자의 인덱스를 검색
var string = 'hello world';
var search = 'l';
var index;

for (var i = 0; i < string.length; i++) {
    if (string[i] === search) {
        index = i;
        break;
    }
}

console.log(index);