import { updateUserInput } from "../domain-model/dto/CreateUpdateUserDto";
import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";



export interface IUserRepo{

        
    CreateUser(input:CreateUserInput):Promise<User>


    findUserByEmail(email:string): Promise<User>

    updateUser(input: updateUserInput): Promise<boolean> 
}