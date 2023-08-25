import { IUserRepo } from "../../repository/IUserRepo";
import { CreateUpdateUserDto, updateUserInput } from "../dto/CreateUpdateUserDto";


export class UpdateUserUseCase{


    constructor(private repo:IUserRepo){
        this.repo = repo;
    }

    async execute(input:updateUserInput){
        const dto=new CreateUpdateUserDto(input);
        const result=await this.repo.updateUser(dto.getInput())
        return result
    }
}

