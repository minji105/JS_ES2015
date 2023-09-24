var sayNode = function () {
    console.log('Node');
}
var es = 'ES';
var oldObject = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);


const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,        // 변수명이 동일한 경우에는 한 번만 써도 됨
    [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);