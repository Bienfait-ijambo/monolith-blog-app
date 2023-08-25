import { AppDataSource } from "../../../infrastructure/typeorm/data-source";
import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";
import { IUserRepo } from "./IUserRepo";
import { catchError } from "../../../shared/errors/CatchError";
import { updateUserInput } from "../domain-model/dto/CreateUpdateUserDto";
import { logErrorToFile } from "../../../infrastructure/graphql-server/winston/logErrorToFile";

export class UserService implements IUserRepo {

  
  @catchError
  async findUserByEmail(email: string): Promise<User> {
    const user = await AppDataSource.getRepository(User)
      .createQueryBuilder("user")
      .where(`user.email = :email`, { email: email })
      .getOne();

      return user

  }

  @catchError
  async CreateUser(input: CreateUserInput): Promise<User> {
    const result = await AppDataSource.getRepository(User).save(input);
    return result;
  }

  @catchError
  async updateUser(input: updateUserInput): Promise<boolean> {
    const result=await AppDataSource
    .createQueryBuilder()
    .update(User)
    .set({ userName: input.userName })
    .where("id = :id", { id: input.id })
    .execute()
   
   return result ? true : false
  }


  @catchError
  async getUsers(): Promise<User[]> {
    const result = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .getMany()
   
   return result 
  }



 

  
}

export const userService = new UserService();
