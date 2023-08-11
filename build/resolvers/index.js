"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var merge_1 = require("@graphql-tools/merge");
var graphql_1 = require("../api/User/presentation/graphql");
var allResolvers = [
    graphql_1.userResolvers
];
exports.resolvers = (0, merge_1.mergeResolvers)(allResolvers);
//# sourceMappingURL=index.js.map