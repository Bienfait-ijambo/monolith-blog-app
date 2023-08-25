"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("../../api/User/repository/User");
var Post_1 = require("../../api/Post/repository/Post");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "090912",
    database: "blog_app",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Post_1.Post],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map