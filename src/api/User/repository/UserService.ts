import { AppDataSource } from "../../../infrastructure/typeorm/data-source";
import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";
import { IUserRepo } from "./IUserRepo";
import { catchError } from "../../../shared/errors/CatchError";

export class UserService implements IUserRepo {


  @catchError
  async CreateUser(input: CreateUserInput): Promise<User> {
    const result = await AppDataSource.getRepository(User).save(input);

    return result;
  }
}

export const userService = new UserService();
