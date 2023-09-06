import { IUserRepo } from "../../repository/IUserRepo";

export interface ISearchUserInput{
  userName: string;
  page:number
}
export class GetUsersUseCase{

    constructor(private repo: IUserRepo) {
        this.repo = repo;
      }
    
      async execute(input:ISearchUserInput) {

        const result= await this.repo.getUsers(input);

        return result
      }
}

