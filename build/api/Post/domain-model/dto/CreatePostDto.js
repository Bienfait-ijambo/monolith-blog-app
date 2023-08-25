"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostDto = void 0;
var Post_1 = require("../../repository/Post");
var CreatePostDto = /** @class */ (function () {
    function CreatePostDto(input) {
        this.title = input.title;
        this.content = input.content;
    }
    CreatePostDto.prototype.getInput = function () {
        return new Post_1.Post(this.title, this.content);
    };
    return CreatePostDto;
}());
exports.CreatePostDto = CreatePostDto;
//# sourceMappingURL=CreatePostDto.js.map