import { propertyIsValidNumber } from "../errors/propertyIsValidNumber";

export function IsNumber(target: any, propertykey: string) {
  let value = target[propertykey];

  
  const getter = function () {
    return value;
  };

  const setter = function (newValue: string) {
    propertyIsValidNumber(newValue, `${propertykey}`);
    value = newValue;
 
  };

  Object.defineProperty(target, propertykey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
