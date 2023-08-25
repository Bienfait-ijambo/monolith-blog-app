import { test } from "node:test";
import assert from "node:assert";

import { CreateUserLoginDto } from "../../../../api/User/domain-model/dto/createUserLoginDto";
import { CreateUserPwd } from "../../../../api/User/domain-model/dto/CreateUserPwd";

test("Login unit tests", async (t) => {
  await t.test("should throws error if inputs empty ! ", async (t) => {
    assert.throws(
      () => {
        new CreateUserLoginDto({
          email: "",
          password: "",
        });
      },Error );
  });

  //user provivde valid input
  await t.test("it should create valid user input ", async (t) => {
    const userInput = {
      email: "test@example.com",
      password: "0909125",
    };

    const dto = new CreateUserLoginDto(userInput);
    const result = dto.getInput();

    assert.deepStrictEqual(result, userInput);
  });

  await t.test("should password be valid ", async (t) => {
    const hash = await CreateUserPwd.hashPassword("1234567");
    const validPwd = await CreateUserPwd.verifyPassword("1234567", hash);

    assert.deepStrictEqual(validPwd, true);
  });
});
