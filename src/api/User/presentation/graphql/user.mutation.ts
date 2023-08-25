import { CreateUserUseCase } from "../../domain-model/usecases/CreateUser";
import { LoginUserUseCase } from "../../domain-model/usecases/LoginUser";
import { UpdateUserUseCase } from "../../domain-model/usecases/UpdateUser";
import { userService } from "../../repository/UserService";



export const userMutations = {

  loginUser: async (root, { input }) => {
      const usecase = new LoginUserUseCase(userService);
      const result= await usecase.execute(input);
     return result
    },
  createUser: async (root, { input }) => {
    const usecase = new CreateUserUseCase(userService);
    const result = await  usecase.execute(input);
    return result
  },

  updateUser: async (root, { input }) => {
    const usecase = new UpdateUserUseCase(userService);
    const result = await  usecase.execute(input);
    return {success:result}
  },


  
  

};



