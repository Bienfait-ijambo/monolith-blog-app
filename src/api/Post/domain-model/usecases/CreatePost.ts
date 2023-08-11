import { IPostRepo } from "../../repository/IPostRepo";
import { CreatePostInput } from "../dto/CreatePostDto";

export class CreatePostUseCase{


    constructor(private repo:IPostRepo){
        this.repo = repo;
    }

    async execute(input:CreatePostInput){
        const result=await this.repo.CreatePost(input)
        return result
    }
}