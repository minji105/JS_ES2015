if (true) {
    var x = 3;
}
console.log(x);

if (true) {
    const y = 3;     // 블록 밖에서는 접근 못함
}
// console.log(y);

const a = 0;
console.log(a);
// a = 1;      // 다른 값 할당 못함
// console.log(a);

let b = 0;
console.log(b);
b = 1;
console.log(b);
