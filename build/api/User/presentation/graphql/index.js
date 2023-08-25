"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolvers = void 0;
// import { authMutations } from "./auth.mutation"
var user_mutation_1 = require("./user.mutation");
var user_query_1 = require("./user.query");
exports.userResolvers = {
    Mutation: user_mutation_1.userMutations,
    Query: user_query_1.userQueries
};
//# sourceMappingURL=index.js.map