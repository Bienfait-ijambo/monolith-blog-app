"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
var Required_1 = require("../../../../shared/validators/Required");
var User_1 = require("../../entity/User");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto(input) {
        this.email = input.email;
        this.password = input.password;
        this.role = input.role;
    }
    CreateUserDto.prototype.getInput = function () {
        return new User_1.User(this.email, this.password, this.role);
    };
    __decorate([
        (0, Required_1.Required)(6, 8),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        (0, Required_1.Required)(4, 5),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "role", void 0);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=CreateUserDto.js.map