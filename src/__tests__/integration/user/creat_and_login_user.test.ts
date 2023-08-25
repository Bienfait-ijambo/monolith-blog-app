import assert from "node:assert";
import { test, before, after } from "node:test";
import { initDbConnection } from "../../../infrastructure/typeorm";
import { CreateUserUseCase } from "../../../api/User/domain-model/usecases/CreateUser";
import { userService } from "../../../api/User/repository/UserService";
import { LoginUserUseCase } from "../../../api/User/domain-model/usecases/LoginUser";
import { UpdateUserUseCase } from "../../../api/User/domain-model/usecases/UpdateUser";

test("createUser integration-test suite", async (t) => {
  before(async () => await initDbConnection());

  const createUserUseCase = new CreateUserUseCase(userService);
  const loginUseCase = new LoginUserUseCase(userService);
  const updateUserUseCase = new UpdateUserUseCase(userService);


  let random = Math.floor(Math.random() * 1000);

  const userInput = {
    email: `usi1${random}2@gmail.com`,
    password: "password",
  };

 await t.test('Create user test-suite',async (t) => {
  
  await t.test("should create a user", async () => {
    const result = await createUserUseCase.execute(userInput);
    const { email, ...restInput } = result;

    assert.equal(email, userInput.email);
  });

  await t.test("should throw error if email exist", async () => {
    assert.rejects(
      async () => {
        await createUserUseCase.execute(userInput);
      },
      {
        name: "Error",
        message: "This email is already been taken",
      }
    );
  });

 })

  await t.test("Login test suite", async (t) => {
    await t.test("Login user", async () => {
      const { user } = await loginUseCase.execute(userInput);
      assert.strictEqual(user.email, userInput.email);
    });

    await t.test("should throw error if password invalid ", async () => {
      assert.rejects(async () => {
        await loginUseCase.execute({
          email: "ija@gmail.com",
          password: "9382",
        });
      },{
        name:'Error',
        message:'Email or password invalid'
      });
    });

  });


  await t.test("Update user suite", async (t) => {

    await t.test("update user", async () => {
      const result= await updateUserUseCase.execute({
        id:2,
        userName:"Ijambo"
      });
      assert.strictEqual(result, true);
    });

    await t.test("should throw error if invalid userName", async () => {
      assert.rejects(async () => {
        await updateUserUseCase.execute({
          id: 1,
          userName: "nuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
        });
      },{
        name:"Error",
        message:'Name must be between 3 and 10 characters'
      });
      assert.rejects(async () => {
        await updateUserUseCase.execute({
          id: 1,
          userName: "y",
        });
      },{
        name:"Error",
        message:'Name must be between 3 and 10 characters'
      });
    });

  

  });

  // after(async () => {
  //   // Clean up or perform actions after all tests have finished
  //   // await closeDbConnection();
  // });
});
