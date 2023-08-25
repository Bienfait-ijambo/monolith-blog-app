import { IUserRepo } from "../../repository/IUserRepo";
import { CreateUserLoginDto, createLoginInput } from "../dto/createUserLoginDto";


export class LoginUserUseCase{

    constructor(private repo: IUserRepo) {
        this.repo = repo;
      }
    
      async execute(input: createLoginInput) {

        const dto = new CreateUserLoginDto(input);
    
        const user= await this.repo.findUserByEmail(input.email);

        if(!user) throw new Error('Email or password invalid')

        const isValidPwd = await dto.isValidPassword(input.password,user.password);
    
        if (!isValidPwd) throw new Error('Email or password invalid')
    
         return {user:user}
      }
}

