"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumber = void 0;
var propertyIsValidNumber_1 = require("../errors/propertyIsValidNumber");
function IsNumber(target, propertykey) {
    var value = target[propertykey];
    var getter = function () {
        return value;
    };
    var setter = function (newValue) {
        (0, propertyIsValidNumber_1.propertyIsValidNumber)(newValue, "".concat(propertykey));
        value = newValue;
    };
    Object.defineProperty(target, propertykey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
exports.IsNumber = IsNumber;
//# sourceMappingURL=IsNumber.js.map