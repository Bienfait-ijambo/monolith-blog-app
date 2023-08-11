

/**
 * 
 * @param property 
 * @param name 
 * @throws an error if the property is not undefined or not empty
 */
export const requiredPropertyError=(property:any,name:string)=>{

    if(typeof property==='undefined' || property==='') 
    throw new  Error(`Veuillez entre la ${property}  `);
}


