import { Required } from "../../../../shared/validators/Required"
import { User } from "../../repository/User"
import { CreateUserInput } from "../usecases/interfaces/userInterfaces"
import { UserDto } from "./UserDto"

export enum UserRole{
    ADMIN = "ADMIN",
    VISITOR="VISITOR"
}
export class CreateUserDto {



    private email:string

    // @Required(6,8)
    private password:string

    // @Required(4,5)
    private role:string


    constructor(input:CreateUserInput){
        this.email = input.email
        this.password = input.password
        this.role = input.role
    }


    getInput():User{

        return new User('',this.email, this.password, UserRole.VISITOR)
      
    }


}