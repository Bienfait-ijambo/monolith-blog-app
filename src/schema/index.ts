import { mergeTypeDefs } from '@graphql-tools/merge';

import * as path from 'path';
import { createReadStream, readFileSync,readdirSync, writeFile } from 'fs';


function foldersInSchemaFolder(){

  const files= readdirSync(path.join(__dirname), { withFileTypes: true })
  const  folders = files.filter(file => file.isDirectory()).map(folder => folder.name);
  return folders
}



export function returnTypeDefs(){

  const folders=foldersInSchemaFolder()

  const typesDefs=folders.map((type) => {

    const schemaDir = path.join(__dirname, type);

    const schemaFiles = readdirSync(schemaDir).filter(file => file.endsWith('.graphql'));

    const schema = schemaFiles.map((file) => {
      const filePath = path.join(schemaDir, file);
      return readFileSync(filePath, 'utf8');

    }).join('');

    return schema;
  });

  return typesDefs
}


export function writeTypeDefs(filePath: string, typeDefs: string[]) {
  let all = "";
  for (var i = 0; i < typeDefs.length; i++) {
    all += typeDefs[i];

  }

  writeFile(filePath, all, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }

    console.log("typeDefs written successfully to txt file !.");
  });
}



export async function getTypeDeftsInProduction(){

const stream = createReadStream(path.join(__dirname)+'/typedefs.txt', { encoding: 'utf8' });
let result = '';
  for await (const chunk of stream) {
   result+=chunk
  }
  return result

}


 function graphqlSchema():string[] {

//   if(process.env.NODE_ENV === 'production'){
    const allSchema= readFileSync(path.join(__dirname)+'/typedefs.txt', { encoding: 'utf-8' })
    return [allSchema]
//   }

//   if(process.env.NODE_ENV==='development'){
    // return returnTypeDefs()
//   }
}

export const typeDefs = mergeTypeDefs(graphqlSchema());