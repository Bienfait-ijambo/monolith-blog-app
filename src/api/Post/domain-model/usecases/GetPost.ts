import { IPostRepo } from "../../repository/IPostRepo";

export class GetPostUseCase{


    constructor(private repo:IPostRepo){
        this.repo = repo;
    }

    async execute(){
        const result=await this.repo.GetPosts()
        return result
    }
}