"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Required = void 0;
var requiredProperty_1 = require("../errors/requiredProperty");
function Required(min, max) {
    return function (target, propertyKey) {
        var value = target[propertyKey];
        var getter = function () {
            return value;
        };
        var setter = function (newValue) {
            (0, requiredProperty_1.requiredPropertyError)(newValue, "".concat(propertyKey));
            if (newValue.length >= min && newValue.length <= max) {
            }
            else {
                throw new Error("This ".concat(propertyKey, "  doit \u00EAtre entre  ").concat(min, " et ").concat(max, " charact\u00E8res !!"));
            }
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}
exports.Required = Required;
// export function changeFieldNameToFrench(propery: string) {
//   switch (propery) {
//     case "name":
//       return "Nom";
//     case "designation":
//       return "Designation";
//     default:
//       return propery;
//   }
// }
//# sourceMappingURL=Required.js.map