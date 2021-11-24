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
