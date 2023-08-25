import { IUserRepo } from "../../repository/IUserRepo";


export class GetUsersUseCase{

    constructor(private repo: IUserRepo) {
        this.repo = repo;
      }
    
      async execute() {

        const result= await this.repo.getUsers();

        return result
      }
}

