// 프로미스: 실행은 바로 하되 결괏값은 나중에 받음

// 프로미스 객체 생성
const condition = true;     // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음
promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);   // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.log(error);     // 실패(reject)한 경우
    })
    .finally(() => {             // 끝나고 무조건 실행
        console.log('무조건');
    })