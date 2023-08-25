import { existsSync, writeFileSync } from "fs";
import * as path from "path";
import { returnTypeDefs, writeTypeDefs } from ".";

const filePath = "C:/xampp/htdocs/projects/graphQL-projects/micro-blog-app/build/schema/typedefs.txt";


function cleanTypeDefsFile(filePath) {
  writeFileSync(filePath, "");
}

function writeTypeDefsFile(filePath) {
  writeTypeDefs(filePath, returnTypeDefs());
}


function checkFileExists(path) {
  return existsSync(path);
}

function writeTypedefsToProduction() {

 
  if (checkFileExists(filePath)) {
    //clean file into build folder
    cleanTypeDefsFile(filePath);
    // write file into build folder
    writeTypeDefsFile(filePath);
  } else {
    //create file
    writeFileSync(filePath, "", { flag: "wx" });

    //write typedefs to the created file in build folder
    writeTypeDefsFile(filePath);
  }
}

const build = async () => {
    //clean development file
    await cleanTypeDefsFile(filePath);
    //write to development folder
    await writeTypeDefsFile(path.join(__dirname) + "/typedefs.txt");
    //write to production folder
    await writeTypedefsToProduction()
  };


build();

