import { IUserRepo } from "../../repository/IUserRepo";
import { CreateUserDto } from "../dto/CreateUserDto";
import { CreateUserInput } from "./interfaces/userInterfaces";


export class CreateUserUseCase{


    constructor(private repo:IUserRepo){
        this.repo = repo;
    }

    async execute(input:CreateUserInput){
        const dto=new CreateUserDto(input);
        const data=await dto.getInput();
        const result=await this.repo.CreateUser(data)
        return result
    }
}