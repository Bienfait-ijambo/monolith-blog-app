import { CreatePostUseCase } from "../../domain-model/usecases/CreatePost";
import { postService } from "../../repository/PostService";


export const postMutations = {


  createPost: async (root, { input }) => {
    const usecase = new CreatePostUseCase(postService);
    const result = await  usecase.execute(input);
    return result
  },

};



