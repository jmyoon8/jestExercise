// jest.spyOn 는 어떤 함수를 가짜로 만들지않고 실질적인 함수를 사용 해야 할 때가 있습니다. 이럴때 해당 함수의 호출 횟수나 어떻게 호출되었는지만 알아내야할 떄상요한다.

const caculator = {
  add: (a: number, b: number) => a + b,
};
test("스파이", () => {
  const spyFn = jest.spyOn(caculator, "add");
  const result = caculator.add(2, 4);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toHaveBeenCalledWith(2, 4);
  expect(result).toBe(6);
});

// 모듈 모킹
//https://www.daleseo.com/jest-mock-modules/
