const a = new Map();

m.set('a', 'b');
m.set(3, 'c');
const d = {};
m.set(d, 'e');

m.get(d);
console.log(m.get(d));