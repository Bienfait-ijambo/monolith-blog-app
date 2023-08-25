import { CreateUserInput } from "../usecases/interfaces/userInterfaces";

export interface updateUserInput {
  id: number;
  userName: string;
}
export class CreateUpdateUserDto {
  private id: number;

  private userName: string;

  constructor(input: updateUserInput) {
    this.id = input.id;
    this.userName = input.userName;

    if (this.isNotValidInput()) throw new Error("Id and userName are required");

    if(!this.isValidName()) throw new Error('Name must be between 3 and 10 characters')
  }

  isNotValidInput(): boolean {
    return this.isValidId() && this.userName !== "" ? false : true;
  }

  private isValidId() {
    if (typeof this.id === "undefined") return false;

    const validNumber = /^\d+(\.\d+)?$/;
    const isValid = validNumber.test(this.id.toString());

    return isValid;
  }

  isValidName() {
    return this.userName.length >= 3 && this.userName.length <= 10
      ? true
      : false;

     
  }

  getInput(): updateUserInput {
    const isValidId = this.isValidId();
    const isValidName = this.isValidName();
    if (isValidId && isValidName) {
      return {
        id: this.id,
        userName: this.userName,
      };
    }
  }
}
