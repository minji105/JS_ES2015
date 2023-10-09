const s = new Set();
s.add(false);
s.add(1);
s.add('1');
s.add(1);   // 중복이므로 무시됨
s.add(2);

console.log(s.size);    // 4

s.has(1);   // 존재 여부 확인
console.log(s.has(1));  // true

for (const a of s) {
    console.log(a);
}

s.forEach((a) => {
    console.log(a);
})

s.delete(2);
s.clear();

// 기존 배열에서 중복을 제거
const arr = [1, 3, 2, 7, 2, 6, 3, 5];

const a = new Set(arr);
const result = Array.from(a);
console.log(result); 