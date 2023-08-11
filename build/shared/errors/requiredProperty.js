"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredPropertyError = void 0;
/**
 *
 * @param property
 * @param name
 * @throws an error if the property is not undefined or not empty
 */
var requiredPropertyError = function (property, name) {
    if (typeof property === 'undefined' || property === '')
        throw new Error("Veuillez entre la ".concat(property, "  "));
};
exports.requiredPropertyError = requiredPropertyError;
//# sourceMappingURL=requiredProperty.js.map