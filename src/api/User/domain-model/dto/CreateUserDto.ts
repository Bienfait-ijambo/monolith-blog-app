import { User } from "../../repository/User";
import { CreateUserInput } from "../usecases/interfaces/userInterfaces";
import { CreateUserPwd } from "./CreateUserPwd";

export enum UserRole {
  ADMIN = "ADMIN",
  VISITOR = "VISITOR",
}
export class CreateUserDto {
  private email: string;

  private password: string;

  private role: string;

  constructor(input: CreateUserInput) {
    this.email = input.email;
    this.password = input.password;

    if (this.isValidInput()) throw new Error('Enter email and password"');
  }

  isValidInput(): boolean {
    return this.email === "" || this.password === "" ? true : false;
  }

  async getInput(): Promise<User> {
    if(!this.isValidEmail()) throw new Error('Invalid email adress');
    const hashPwd = await CreateUserPwd.hashPassword(this.password);
    return new User("", this.email, hashPwd, UserRole.VISITOR);
  }

  isValidEmail(): boolean {
    if (this.email.length > 50) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid= emailRegex.test(this.email);
    return isValid 
  }


}
