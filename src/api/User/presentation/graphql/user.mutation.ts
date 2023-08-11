import { CreateUserUseCase } from "../../domain-model/usecases/CreateUser";
import { userService } from "../../repository/UserService";



export const userMutations = {

  loginUser: async (root, { input }) => {
    //   const usecase = new LoginUserUseCase(userRepo);
    //   const result= await usecase.execute(input);
    //  return result
    },
  createUser: async (root, { input }) => {
    const usecase = new CreateUserUseCase(userService);
    const result = await  usecase.execute(input);
    return result
  },

};



