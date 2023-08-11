

import { AppDataSource } from "./data-source"

export async function initDbConnection(){
    AppDataSource.initialize().then(async () => {
    console.log('db connection established...')
    }).catch(error => console.log('db-error : ',error.message))
    
}