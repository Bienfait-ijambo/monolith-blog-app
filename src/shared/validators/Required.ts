import { requiredPropertyError } from "../errors/requiredProperty";

export function Required(min: number, max: number) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      requiredPropertyError(newValue, `${propertyKey}`);

      if (newValue.length >= min && newValue.length <= max) {
      } else {
        throw new Error(
          `This ${propertyKey}  doit être entre  ${min} et ${max} charactères !!`
        );
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
