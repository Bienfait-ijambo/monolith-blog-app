import { test } from "node:test";
import assert from "node:assert";
import { CreateUpdateUserDto } from "../../../../api/User/domain-model/dto/CreateUpdateUserDto";

test("update user unit tests", async (t) => {


  await t.test("should throws error", async (t) => {
    assert.throws(
      () => {
        new CreateUpdateUserDto({
            userName: "",
            id: 0,
          });
      },
      {
        name: "Error",
        message: "Id and userName are required",
      }
    );
  });

  await t.test("should return valid input ", async (t) => {
    const updateInput = new CreateUpdateUserDto({
      id: 1,
      userName: "Bienfait",
    });

    const validInput = updateInput.getInput();
    const userName = updateInput.getInput().userName;
    const userId = updateInput.getInput().id;

    assert.strictEqual(Number.isInteger(userId), true);
    assert.equal(typeof validInput.userName, "string");
    assert.deepStrictEqual( {
        id: 1,
        userName: "Bienfait",
      },updateInput.getInput());

    assert.ok(userName.length >= 3 && userName.length <= 10, "valid userName");
  });

  await t.test("should throws erros", async (t) => {
    t.test("should throw if invalid userName", async (t) => {
      assert.throws(
        () => {
          new CreateUpdateUserDto({
            id: 1,
            userName: "v",
          });
        },
        {
          name: "Error",
          message: "Name must be between 3 and 10 characters",
        }
      );
    });

    
  });

});
