import { test } from "node:test";
import assert from "node:assert";
import { CreateUserDto } from "../../../../api/User/domain-model/dto/CreateUserDto";
import { CreateUserPwd } from "../../../../api/User/domain-model/dto/CreateUserPwd";
import { logErrorToFile } from "../../../../infrastructure/graphql-server/winston/logErrorToFile";

test("createUser unit tests", async (t) => {
  const userInput = {
    email: "test@example.com",
    password: "0909125",
  };

  await t.test("should throws error if inputs empty !", async (t) => {
    assert.throws(() => {
      new CreateUserDto({
        email: "",
        password: "",
      });
    }, Error);
  });

  await t.test("should verify email", async (t) => {

    await t.test("Should provide valid email", async (t) => {
      const dto = new CreateUserDto({ email: "test@gmail.com", password: "12928" });
      const isValidEmail = dto.isValidEmail();


      assert.strictEqual(isValidEmail, true);
    });

   await t.test("should check invalid email", async (t) => {
      const dto = new CreateUserDto({ email: "testcom", password: "123" });
      const isValidEmail = dto.isValidEmail();

      assert.strictEqual(isValidEmail, false);
    });

    await t.test("should return fase if email is greater than 50", async (t) => {
      const dto = new CreateUserDto({
        email:
          "jooooyyyooyyyooyyyooyyyooyyyooyyyooyyyooyyyooyyyooommmmlllooooooooooooohn@gmail.com",
        password: "123",
      });

      const isValidEmail = dto.isValidEmail();

      assert.strictEqual(isValidEmail, false);
    });
  });

  await t.test("test user password", async (t) => {
    t.test("Password has valid length", async (t) => {
      const isValid1 = CreateUserPwd.hasValidLength("123456");
      const isValid2 = CreateUserPwd.hasValidLength("1234567");
      const isValid3 = CreateUserPwd.hasValidLength("12345678");

      assert.strictEqual(isValid1, true);
      assert.strictEqual(isValid2, true);
      assert.strictEqual(isValid3, true);
    });

    await t.test("Password has invalid length", async (t) => {
      const invalid1 = CreateUserPwd.hasValidLength("123");
      const invalid2 = CreateUserPwd.hasValidLength("1237788787788");

      assert.strictEqual(invalid1, false);
      assert.strictEqual(invalid2, false);
    });
  });

  await t.test("should return input to be passed to db", async (t) => {
    const dto = new CreateUserDto(userInput);
    const input = await dto.getInput();
    const validEmail=dto.isValidEmail()
    assert.strictEqual(validEmail, true);
    assert.strictEqual(userInput.email, input.email);
    assert.strictEqual("", input.userName);
    assert.ok(input.password.length > 20, "user pwd has been hashed");
  });
});
