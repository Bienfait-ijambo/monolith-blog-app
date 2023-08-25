"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResolvers = void 0;
// import { authMutations } from "./auth.mutation"
var post_mutation_1 = require("./post.mutation");
var post_query_1 = require("./post.query");
exports.postResolvers = {
    Mutation: post_mutation_1.postMutations,
    Query: post_query_1.postQueries
};
//# sourceMappingURL=index.js.map