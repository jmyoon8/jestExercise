// mocking이란 단위테스트를 작성할 때 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법이다.
// 테스트하려는 코드에서 의존하는 부분을 직접 생성하기가 너무 부담스러운 경우 mocking이 사용된다.

// 즉 테스트 코드를 작성함에있어 의존하고 있는 코드들이 너무 장황하거나 깊어질경우 사용한다(db에 io, 네트워크 io 작업을 테스팅하는경우)
// 때문에 jest에선 가짜 객체를 만들어준다.

// fn() 가짜 함수만들기 해당 함수는 모두 undefined를 리턴함
const mockFn = jest.fn();
//1.기능 : 직접 리턴결과를 넣어주어도 됨
//1.코드 : mockFn.mockReturnValue("난 가짜다");
//2.기능 : promise객체를 만들어줘도 됨
//2.코드 : mockFn.mockResolvedValue("비동기 결과");
//3. 기능 : 통채로 재구현가능
mockFn.mockImplementation((name: string) => {
  return `내이름은 ${name}`;
});
test("undefinded", async () => {
  //1. test   expect(mockFn("")).toBe("난 가짜다");
  //2. test   const getString = await mockFn();
  //          expect(getString).toBe("비동기 결과");
  const myName = "jj";
  expect(mockFn(myName)).toBe(`내이름은 ${myName}`);

  // mock함수의 가장 좋은 점은 자신이 어떻게 호출되었는지 모두 기억한다는점 몇번 불렸는지 어떤 파라미터를 썼는지 알수있다.
  mockFn("b");
  mockFn("a");
  expect(mockFn).toBeCalledTimes(3);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith("b");
});
