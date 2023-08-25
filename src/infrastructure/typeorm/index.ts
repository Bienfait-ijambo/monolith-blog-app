

import { AppDataSource } from "./data-source"

export async function initDbConnection(){
    AppDataSource.initialize().then(async () => {
    console.log('db connection established...')
    }).catch(error => console.log('db-error : ',error.message))
    
}

export async function closeDbConnection(){
   await AppDataSource.destroy().catch(error => console.log('failed to close db connection !'))
}