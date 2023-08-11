"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("../../api/User/entity/User");
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "postgres",
//     port: 5432,
//     username: "postgres",
//     password: "090912",
//     database: "test_app",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "090912",
    database: "test_app",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
// "POSTGRES_PASSWORD=090912",
// "POSTGRES_DB=test_app",
// "POSTGRES_USER=postgres",
// 172.23.0.2
//# sourceMappingURL=data-source.js.map