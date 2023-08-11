"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRequiredProperty = void 0;
/**
 *
 * @param obj
 * @param provideProperty
 * chekcs if property is required otherwise
 * @throws {Error} if a user provide unrequested property
 */
var checkRequiredProperty = function (obj, requiredProps) {
    Object.keys(obj).forEach(function (key) {
        if (!requiredProps.includes(key)) {
            throw new Error("".concat(key, " is not a required property"));
        }
    });
};
exports.checkRequiredProperty = checkRequiredProperty;
//# sourceMappingURL=checkRequiredProperty.js.map