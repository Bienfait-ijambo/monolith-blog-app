import { AppDataSource } from "../../../infrastructure/typeorm/data-source";
import { CreatePostInput } from "../domain-model/dto/CreatePostDto";
import { IPostRepo } from "./IPostRepo";
import { Post } from "./Post";


export class PostService implements IPostRepo {


 async CreatePost(input: CreatePostInput): Promise<Post> {

      const result =  await AppDataSource.getRepository(Post).save(input);

      return result;
      
  }

 async GetPosts(): Promise<Post[]> {

      const result = await AppDataSource
    .getRepository(Post)
    .createQueryBuilder("post")
    .getMany()
    return result
  }



}

export const postService = new PostService();
