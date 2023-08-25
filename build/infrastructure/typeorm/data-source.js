"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("../../api/User/repository/User");
var Post_1 = require("../../api/Post/repository/Post");
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "090912",
//     database: "blog_app",
//     synchronize: true,
//     logging: false,
//     entities: [User,Post],
//     migrations: [],
//     subscribers: [],
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "dpg-cimlrqlgkuvgvh9ealvg-a",
    port: 5432,
    username: "ubs_app",
    password: "ePxmhsMoT6QOhfSLQxHsmNJWkDf7YE9D",
    database: "ubs_fin_lium",
    synchronize: false,
    logging: false,
    entities: [User_1.User, Post_1.Post],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map