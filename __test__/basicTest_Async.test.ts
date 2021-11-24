// 기본적인 테스트 설명
// ts환경에서 jest 설정은 다음 레포지토리를 참고 https://github.com/JamesPeiris/ts-jest-warning
// jest 테스트 방법은 다음 블로그를 참고 https://www.daleseo.com/jest-basic/
/*
npm test 으로 실행
-- jest는 .test.js으로 끝나거나 __test__폴더안에 있는 모든 파일을 테스트 경로로 인식합니다.
-- 특정 파일만 실행 하고싶은 경우 npm test <파일명이나 경로>를 사용하면됩니다.

콜백  함수 테스트
*/
//  비동기객체(setTime)이후에 콜백을 주는 함수를 테스트 해보자
// 1. 콜백
const callbackFunc = (id: string, cb: (id: object) => void) => {
  setTimeout(() => {
    console.log("wait 0.1 sec");
    const user = {
      id,
      name: `user${id}`,
      email: `${id}@test.com`,
    };
    cb(user);
  }, 100);
};

const callbackFuncTest = () => {
  test("fetch a user", (done) => {
    callbackFunc("1", (id) => {
      expect(id).toEqual({
        id: "1",
        name: "user1",
        email: "1@test.com",
      });
      // done을 콜백함수 맨 마지막에 호출하여야 jest가 콜백함수임을 알고 기다린다음 테스트를 진행한다. 그렇지 테스트는 무조건 실패한다.
      done();
    });
  });
};
// callbackFuncTest();

// 2. promise

const promiseFunc = (id: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec");
      const user = {
        id,
      };
      resolve(user);
    }, 100);
  });

const promiseFuncTest = () => {
  // 프로미스는 async/await를 쓰면 자동으로 기다렸다가 테스팅을한다.
  test("프로미스 테스트", async () => {
    const data = await promiseFunc("id");
    expect(data).toEqual({
      id: "id",
    });
  });
};
promiseFuncTest();
