
/**
 * 
 * @param obj 
 * @param provideProperty 
 * chekcs if property is required otherwise
 * @throws {Error} if a user provide unrequested property 
 */
export const checkRequiredProperty=(obj:any,requiredProps:string[])=>{

    Object.keys(obj).forEach(key=>{

        if(!requiredProps.includes(key)){
            throw new Error(`${key} is not a required property`);
        }
    })



}