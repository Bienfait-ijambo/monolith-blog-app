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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.UserService = void 0;
var data_source_1 = require("../../../infrastructure/typeorm/data-source");
var User_1 = require("./User");
var CatchError_1 = require("../../../shared/errors/CatchError");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.findUserByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.User)
                            .createQueryBuilder("user")
                            .where("user.email = :email", { email: email })
                            .getOne()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.CreateUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.User).save(input)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.updateUser = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data_source_1.AppDataSource.createQueryBuilder()
                            .update(User_1.User)
                            .set({ userName: input.userName })
                            .where("id = :id", { id: input.id })
                            .execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result ? true : false];
                }
            });
        });
    };
    UserService.prototype.getUsers = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var PAGE_SIZE, _a, users, count, totalPages;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        PAGE_SIZE = 5;
                        return [4 /*yield*/, data_source_1.AppDataSource.getRepository(User_1.User)
                                .createQueryBuilder("user")
                                .where("lower(user.userName) LIKE :name", {
                                name: "%".concat(input.userName.toLowerCase(), "%"),
                            })
                                .skip((input.page - 1) * PAGE_SIZE)
                                .take(PAGE_SIZE)
                                .getManyAndCount()];
                    case 1:
                        _a = _b.sent(), users = _a[0], count = _a[1];
                        totalPages = Math.ceil(count / PAGE_SIZE);
                        return [2 /*return*/, { users: users, count: count, totalPages: totalPages }];
                }
            });
        });
    };
    __decorate([
        CatchError_1.catchError,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserService.prototype, "findUserByEmail", null);
    __decorate([
        CatchError_1.catchError,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserService.prototype, "CreateUser", null);
    __decorate([
        CatchError_1.catchError,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserService.prototype, "updateUser", null);
    __decorate([
        CatchError_1.catchError,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserService.prototype, "getUsers", null);
    return UserService;
}());
exports.UserService = UserService;
exports.userService = new UserService();
//# sourceMappingURL=UserService.js.map