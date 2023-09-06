import { updateUserInput } from "../domain-model/dto/CreateUpdateUserDto";
import { ISearchUserInput } from "../domain-model/usecases/GetUsers";
import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";

type PaginationParams={

}


export interface IUserRepo{

        
    CreateUser(input:CreateUserInput):Promise<User>


    findUserByEmail(email:string): Promise<User>

    updateUser(input: updateUserInput): Promise<boolean> 

    // getUsers(): Promise<User[]> 
    getUsers(input:ISearchUserInput): Promise<{users:User[],count:number,totalPages:number}> 



    
}