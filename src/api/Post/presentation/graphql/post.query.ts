import { GetPostUseCase } from "../../domain-model/usecases/GetPost";
import { postService } from "../../repository/PostService";


export const postQueries = {


  posts: async (root, { input }) => {
    const usecase = new GetPostUseCase(postService);
    const result = await  usecase.execute();
    return result
  },

};



