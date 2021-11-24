// 기본적인 테스트 설명
// ts환경에서 jest 설정은 다음 레포지토리를 참고 https://github.com/JamesPeiris/ts-jest-warning
// jest 테스트 방법은 다음 블로그를 참고 https://www.daleseo.com/jest-basic/
/*
npm test 으로 실행
-- jest는 .test.js으로 끝나거나 __test__폴더안에 있는 모든 파일을 테스트 경로로 인식합니다.
-- 특정 파일만 실행 하고싶은 경우 npm test <파일명이나 경로>를 사용하면됩니다.

text("테스트 설명",()=>{
    expect("검증대상").toXxx("기대결과")
})

toXxx부분에는 testMatcher라고 합니다.(일치하는지 확인함)

testMatcher의 종류(testMatcher를 실행하기전 .not.을 넣으면 반대결과를 태스트한다. )
*/
//1. toBe() : 숫자나 문자 같은 기본형(primitive)값을 비교하는데 사용
const returnOne = () => {
  return 1;
};
const toBeTest = () => {
  test("1은 이고 1이 나와야한다", () => {
    expect(returnOne()).toBe(1);
  });
};
// toBeTest();

//2. toEqual() :객채 비교
const returnObjest = (id: string) => {
  return {
    id,
    pwd: 1234,
  };
};
const toEqualTest = () => {
  test("객체는 id:jm,pwd:1234이 나와야한다", () => {
    expect(returnObjest("jm")).toEqual({
      id: "jm",
      pwd: 1234,
    });
  });
};
// toEqualTest();

// 3. toBeFalsy(), toBeTruthy boolean타입 뿐만 아니라 falsy한 truthy한 데이터를 테스트한다
const toBeFalsyOrToBeTruthyTest = () => {
  test("0은 falsy입니다.", () => {
    expect(0).toBeFalsy();
  });
  test("'0'은 truthy입니다.", () => {
    expect("0").toBeTruthy();
  });
};
// toBeFalsyOrToBeTruthyTest();

// 4. toHaveLength(), toContain() 배열의 길이가 같은지, 베열에 해당 값이 들어있는지 확인
const isLengthEqual = () => {
  const array = [1, 2, 3];
  test("배열이 3개이고 4를 포함하지않고 2를 포함함?", () => {
    expect(array).toHaveLength(3);
    expect(array).not.toContain(4);
    expect(array).toContain(2);
  });
};
// isLengthEqual();

//5. toThrow() 예외 발생여부를 테스트
const getUserInfo = (id: any) => {
  if (id < 0) throw new Error("음수는 아이디가 될 수 없습니다.");
  return {
    id,
    pwd: 1234,
  };
};
const isError = () => {
  test("아이디가 음수이면 에러가 발생해야함", () => {
    expect(getUserInfo(-1)).toThrow("invalid id");
  });
};
isError();
//결과
/*
 FAIL  __test__/jest.test.ts
  ✕ 아이디가 음수이면 에러가 발생해야함 (1 ms)

  ● 아이디가 음수이면 에러가 발생해야함

    음수는 아이디가 될 수 없습니다.

      67 | //5. toThrow() 예외 발생여부를 테스트
      68 | const getUserInfo = (id: any) => {
    > 69 |   if (id < 0) throw new Error("음수는 아이디가 될 수 없습니다.");
         |                     ^
      70 |   return {
      71 |     id,
      72 |     pwd: 1234,

      at getUserInfo (__test__/jest.test.ts:69:21)
      at Object.<anonymous> (__test__/jest.test.ts:77:12)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.447 s, estimated 1 s
Ran all test suites.
*/
