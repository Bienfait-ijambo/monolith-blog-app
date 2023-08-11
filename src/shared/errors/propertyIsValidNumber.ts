import { requiredPropertyError } from "./requiredProperty";


/**
 * 
 * @param property 
 * @param propertyName 
 * checks if the property is valid number otherwise @throws and error
 */
export const propertyIsValidNumber=(property:string |number,propertyName:string)=>{
   
    if(typeof property==='undefined' || property==='') 
    throw new  Error(`Veuillez completer ce champ : ${propertyName}  `);

    const regex=/^\d+(\.\d+)?$/
    const isvalid=regex.test(property.toString())

    if(!isvalid) throw new Error(`Charactère invalid : ${property}`);


}

