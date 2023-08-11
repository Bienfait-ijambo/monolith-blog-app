"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyIsValidNumber = void 0;
/**
 *
 * @param property
 * @param propertyName
 * checks if the property is valid number otherwise @throws and error
 */
var propertyIsValidNumber = function (property, propertyName) {
    if (typeof property === 'undefined' || property === '')
        throw new Error("Veuillez completer ce champ : ".concat(propertyName, "  "));
    var regex = /^\d+(\.\d+)?$/;
    var isvalid = regex.test(property.toString());
    if (!isvalid)
        throw new Error("Charact\u00E8re invalid : ".concat(property));
};
exports.propertyIsValidNumber = propertyIsValidNumber;
//# sourceMappingURL=propertyIsValidNumber.js.map