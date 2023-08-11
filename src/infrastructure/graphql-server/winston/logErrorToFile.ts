
const winston = require('winston');


export async function logErrorToFile(error, fileName) {
    const logger = await winston.createLogger({
      transports: [
        new winston.transports.File({ filename: `log-errors/${fileName}` }),
      ],
    });

    logger.error(error);
  }