// 객체의 속성을 같은 이름의 변수에 대입

var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

// var getCandy = candyMachine.getCandy;
// var count = countMachine.status.count;

const { getCandy, status: { count } } = candyMachine;



// 배열에 대한 구조 분해 할당
var array1 = [' nodejs ', {}, 10, true];
var node1 = array1[0];
var obj1 = array1[1];
var bool1 = array1[3];

const array2 = [' nodejs ', {}, 10, true];
const [node2, obj2, , bool2] = array2;