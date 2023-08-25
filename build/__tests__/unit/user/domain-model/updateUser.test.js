"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_test_1 = require("node:test");
var node_assert_1 = __importDefault(require("node:assert"));
var CreateUpdateUserDto_1 = require("../../../../api/User/domain-model/dto/CreateUpdateUserDto");
(0, node_test_1.test)("update user unit tests", function (t) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, t.test("should throws error", function (t) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        node_assert_1.default.throws(function () {
                            new CreateUpdateUserDto_1.CreateUpdateUserDto({
                                userName: "",
                                id: 0,
                            });
                        }, {
                            name: "Error",
                            message: "Id and userName are required",
                        });
                        return [2 /*return*/];
                    });
                }); })];
            case 1:
                _a.sent();
                return [4 /*yield*/, t.test("should return valid input ", function (t) { return __awaiter(void 0, void 0, void 0, function () {
                        var updateInput, validInput, userName, userId;
                        return __generator(this, function (_a) {
                            updateInput = new CreateUpdateUserDto_1.CreateUpdateUserDto({
                                id: 1,
                                userName: "Bienfait",
                            });
                            validInput = updateInput.getInput();
                            userName = updateInput.getInput().userName;
                            userId = updateInput.getInput().id;
                            node_assert_1.default.strictEqual(Number.isInteger(userId), true);
                            node_assert_1.default.equal(typeof validInput.userName, "string");
                            node_assert_1.default.deepStrictEqual({
                                id: 1,
                                userName: "Bienfait",
                            }, updateInput.getInput());
                            node_assert_1.default.ok(userName.length >= 3 && userName.length <= 10, "valid userName");
                            return [2 /*return*/];
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, t.test("should throws erros", function (t) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            t.test("should throw if invalid userName", function (t) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    node_assert_1.default.throws(function () {
                                        new CreateUpdateUserDto_1.CreateUpdateUserDto({
                                            id: 1,
                                            userName: "v",
                                        });
                                    }, {
                                        name: "Error",
                                        message: "Name must be between 3 and 10 characters",
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); })];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=updateUser.test.js.map