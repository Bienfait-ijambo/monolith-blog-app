import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../api/User/repository/User"
import { Post } from "../../api/Post/repository/Post"

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



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "dpg-cimlrqlgkuvgvh9ealvg-a",
    port: 5432,
    username: "ubs_app",
    password: "ePxmhsMoT6QOhfSLQxHsmNJWkDf7YE9D",
    database: "ubs_fin_lium",
    synchronize: false,
    logging: false,
    entities: [User,Post],
    migrations: [],
    subscribers: [],
})





