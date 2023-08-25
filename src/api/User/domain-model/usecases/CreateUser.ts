import { logErrorToFile } from "../../../../infrastructure/graphql-server/winston/logErrorToFile";
import { IUserRepo } from "../../repository/IUserRepo";
import { CreateUserDto } from "../dto/CreateUserDto";
import { CreateUserInput } from "./interfaces/userInterfaces";


export class CreateUserUseCase{


    constructor(private repo:IUserRepo){
        this.repo = repo;
    }

    async execute(input:CreateUserInput){
        const dto=new CreateUserDto(input);

        const userData= dto.getInput();

        const emailExist= this.repo.findUserByEmail(input.email);

        const [userDataResult,emailResult]=await Promise.all([userData,emailExist])

        if(!!emailResult) throw new Error('This email is already been taken')
      
        const result=await this.repo.CreateUser(userDataResult)
        return result
    }
}

