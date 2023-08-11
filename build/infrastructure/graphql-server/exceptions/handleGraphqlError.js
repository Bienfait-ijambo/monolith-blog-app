"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGraphqlError = void 0;
var errors_1 = require("@apollo/server/errors");
var handleGraphqlError = function (formattedError, error) {
    // Return a different error message
    if (formattedError.extensions.code ===
        errors_1.ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
        return __assign(__assign({}, formattedError), { message: "Your query doesn't match the schema. Try double-checking it!" });
    }
    // Otherwise return the formatted error. This error can also
    // be manipulated in other ways, as long as it's returned.
    return formattedError;
};
exports.handleGraphqlError = handleGraphqlError;
//# sourceMappingURL=handleGraphqlError.js.map