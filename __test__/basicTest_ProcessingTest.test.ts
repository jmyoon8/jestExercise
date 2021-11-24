import Data from "../TestCodes/Data";
import { create, destroy, findAll } from "../TestCodes/Funcs";

// 테스트가 시작할때마다 실행될 코드
beforeEach(() => {
  Data.user.push("user1", "user2", "user3", "user4");
});
// 테스트가 끝날때마다 실행될 코드
afterEach(() => {
  Data.user.length = 0;
});

const FindAllTest = () => {
  test("pushUserAndFindAll", () => {
    const findUsers = findAll();
    expect(findUsers).toHaveLength(4);
    expect(findUsers).toContain("user1");
    expect(findUsers).toContain("user2");
    expect(findUsers).toContain("user3");
  });
};
FindAllTest();

const createTest = () => {
  test("유저 생성 테스트", () => {
    const users = Data.user;
    const userInfo = "user1";
    create(userInfo);
    console.log(users);
    expect(users).toHaveLength(5);
  });
};

createTest();

const destroyUser = () => {
  test("유저제거", () => {
    const users = Data.user;
    const deleteUser = "user1";
    destroy(deleteUser);
    expect(users).toHaveLength(3);
  });
};
destroyUser();

// 만약 백엔드에서 db와 커넥션을 연걸하여 테스트해야할경우 테스트 시작<=>끝에 실행할 코드들 은
// beforeAll(), afterAll()으로 작성해주면된다.
// 특정 테스트만 빼고 실행하고싶다면 test.skip() 으로 설정
// 특정 테스트만 실행하고 싶다면 test.only()으로 실행
// 몇몇 테스트만 묶고싶다면 describe("",()=>{
//    test()
//    test()
// })
// 으로 묶어서 실행가능
