import { GetUsersUseCase } from "../../domain-model/usecases/GetUsers";
import { userService } from "../../repository/UserService";

export const userQueries = {

    getUsers: async (root, { input }) => {
        const usecase = new GetUsersUseCase(userService);
        const  { users, count, totalPages }= await usecase.execute(input);
   
        return { users, count, totalPages }; 
      },
    
  
  
  };
  