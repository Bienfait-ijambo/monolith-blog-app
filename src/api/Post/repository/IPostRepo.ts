import { CreatePostInput } from "../domain-model/dto/CreatePostDto";
import { Post } from "./Post";


export interface IPostRepo{

        
    CreatePost(input:CreatePostInput):Promise<Post>

    GetPosts():Promise<Post[]>

}