
import { CreateUserPwd } from "./CreateUserPwd";

export interface createLoginInput{
    email: string;
    password: string;
}
export class CreateUserLoginDto{


    private email:string

    private password:string

 
    constructor(input:createLoginInput){
        this.email = input.email
        this.password = input.password
        if (this.isValidInput()) throw new Error('Enter email and password"');

    }


    isValidInput(): boolean {
        return this.email === "" || this.password === "" ? true : false;
      }


     getInput():createLoginInput{
        return {
            email:this.email,
            password:this.password
        }
    }

    async isValidPassword(raw:string,hash:string){
        const isValidPwd = await CreateUserPwd.verifyPassword(raw,hash);
        return isValidPwd ? true : false;
    }


  
    
}