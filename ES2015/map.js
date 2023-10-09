const m = new Map();

m.set('a', 'b');    // set(키, 값)으로 Map 속성 추가
m.set(3, 'c');
const d = {};
m.set(d, 'e');

m.get(d);
console.log(m.get(d));  // e

m.size;     // 속성 개수 조회
console.log(m.size) // 3

for (const [k, v] of m) {
    console.log(k, v);
}

m.forEach((v, k) => {
    console.log(k, v);
});

m.has(d);   // 속성 존재 여부
console.log(m.has(d))   // true

m.delete(d);    // 속성 삭제
m.clear();  // 전부 제거
console.log(m.size);    // 0
