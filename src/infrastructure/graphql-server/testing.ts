


// // import { createClient } from "redis";

// // import { commandOptions } from 'redis';
// import { logErrorToFile } from "./winston/logErrorToFile";

// // export const redisClient =createClient({
// //   url: 'redis://redis:090912@redis:6379'
// // });
// import { createClient } from 'redis';

// const cron = require('node-cron');

// export const redisClient =createClient({
//   url: 'redis://:@redis:6379'
// });

// export async function connectToRedis() {
//   try {
//     await redisClient.connect();
//     console.log('connected to redis-cli');
//   } catch (error) {
//     console.log("Redis Error : ", error);
//     await logErrorToFile(error, "Redis-error");
//   }
// }





// export function runTask(){
  
// cron.schedule('*/10 * * * * *', () => {
//   console.log('Running a task every ten seconds');
// });

// }


// async function enqueueTask(){
//   try {
//     await redisClient.lPush('customer:name','Bienfait')
//     await redisClient.lPush('customer:name','Luc')
//     await redisClient.lPush('customer:name','Josh')

//   } catch (error) {
//     console.log('error enqueueTask')
//   }
// }


// async function enqueueVal(){
//   try {
//     const data =await redisClient.lRange('customer:name',0,-1)
//     console.log('enqueval : ',data)
//   } catch (error) {
//     console.log('error enqueueTask')
//   }
// }


// async function dequeueTask(){
//   try {
//     const data =await redisClient.lRange('customer:name',0,-1)
//    for(let i = 0; i < data.length; i++){
//    const popVal= await redisClient.lPop('customer:name')
//    console.log('popVal:',popVal)
//    }
//   } catch (error) {
//     console.log('error enqueueTask')
//   }
// }

// // const runQueue=async ()=>{
// //   await connectToRedis()

// //   await enqueueTask()
// //   await  dequeueTask()
// //   await enqueueVal()

// //   redisClient.quit()

// // }

// // runQueue()
