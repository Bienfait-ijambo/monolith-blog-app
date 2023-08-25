import { logErrorToFile } from "../../infrastructure/graphql-server/winston/logErrorToFile";

export function catchError(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
       await logErrorToFile(error,'app-error')
        
      }
    };
  
    return descriptor;
  }