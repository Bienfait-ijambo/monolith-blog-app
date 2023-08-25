"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateUserDto = void 0;
var CreateUpdateUserDto = /** @class */ (function () {
    function CreateUpdateUserDto(input) {
        this.id = input.id;
        this.userName = input.userName;
        if (this.isNotValidInput())
            throw new Error("Id and userName are required");
        if (!this.isValidName())
            throw new Error('Name must be between 3 and 10 characters');
    }
    CreateUpdateUserDto.prototype.isNotValidInput = function () {
        return this.isValidId() && this.userName !== "" ? false : true;
    };
    CreateUpdateUserDto.prototype.isValidId = function () {
        if (typeof this.id === "undefined")
            return false;
        var validNumber = /^\d+(\.\d+)?$/;
        var isValid = validNumber.test(this.id.toString());
        return isValid;
    };
    CreateUpdateUserDto.prototype.isValidName = function () {
        return this.userName.length >= 3 && this.userName.length <= 10
            ? true
            : false;
    };
    CreateUpdateUserDto.prototype.getInput = function () {
        var isValidId = this.isValidId();
        var isValidName = this.isValidName();
        if (isValidId && isValidName) {
            return {
                id: this.id,
                userName: this.userName,
            };
        }
    };
    return CreateUpdateUserDto;
}());
exports.CreateUpdateUserDto = CreateUpdateUserDto;
//# sourceMappingURL=CreateUpdateUserDto.js.map