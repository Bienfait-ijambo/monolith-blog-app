// const redis = require('redis');
// const client = redis.createClient();
// const queueName = 'myQueue';
// function enqueueTask(task) {
//   client.lpush(queueName, task, (error) => {
//     if (error) {
//       console.error('Error enqueueing task:', error);
//     } else {
//       console.log('Task enqueued:', task);
//     }
//   });
// }
// // Enqueue some tasks
// enqueueTask('task1');
// enqueueTask('task2');
// // ...
// function processTasks() {
//     client.rpop(queueName, (error, task) => {
//       if (error) {
//         console.error('Error processing task:', error);
//       } else if (task) {
//         console.log('Processing task:', task);
//         // Process the task here
//         processTasks(); // Continue processing next task
//       } else {
//         console.log('No tasks in the queue');
//       }
//     });
//   }
//   // Start processing tasks
//   processTasks();
//# sourceMappingURL=UploadImage.js.map