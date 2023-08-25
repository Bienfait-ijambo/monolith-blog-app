
// import bcrypt from 'bcrypt'
// import { requiredPropertyError } from '../../../../common/error/requiredProperty';
const bcrypt = require('bcrypt');
export class CreateUserPwd{

  
      /**
       * min length of the password
       */
     private static min:number=6
     /**
      * max length of the password
      */
      private static max:number=8
    
  
    public static async verifyPassword(password:string,hashPassword:string) : Promise<boolean> {
  
      const isMatch = await bcrypt.compare(password,hashPassword);
      
      return (isMatch) ? true : false;
    }


    
    public static async hashPassword(password:string)  : Promise<string>{

      if(!CreateUserPwd.hasValidLength(password))
       throw new Error("Password must be between 6 and 8 characters long !");

      const hash = await bcrypt.hash(password, 10);
      return hash;
    }


     static hasValidLength(password:string):boolean{
      return (password.length >=CreateUserPwd.min && password.length<=CreateUserPwd.max) ? true : false;

    }


    private static isValidatePwd(password:string):boolean{
      const passwordRegex = /^(?=.*\d{4})(?=.*[a-z]{2})(?=.*[A-Z]{2}).{8,}$/;

        return (passwordRegex.test(password)) ? true : false;

    }





}



