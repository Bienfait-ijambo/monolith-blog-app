import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";



export interface IUserRepo{

        
    CreateUser(input:CreateUserInput):Promise<User>
}