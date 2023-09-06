import { updateUserInput } from "../domain-model/dto/CreateUpdateUserDto";
import { ISearchUserInput } from "../domain-model/usecases/GetUsers";
import { CreateUserInput } from "../domain-model/usecases/interfaces/userInterfaces";
import { User } from "./User";





type PaginationParams<T>={
count: T,
totalPages: T
}

export type ApiPagination<K extends string,T>=K extends string ?Record<K,T>  & PaginationParams<number> :never 



export interface IUserRepo{

        
    CreateUser(input:CreateUserInput):Promise<User>


    findUserByEmail(email:string): Promise<User>

    updateUser(input: updateUserInput): Promise<boolean> 

    // getUsers(): Promise<User[]> 
    getUsers(input:ISearchUserInput): Promise<ApiPagination<'users',User[]>> 



    
}