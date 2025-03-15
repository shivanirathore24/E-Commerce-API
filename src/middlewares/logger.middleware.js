import fs from "fs";
const fsPromise = fs.promises;
import winston from "winston";

// async function log(logData) {
//   try {
//     logData = `${new Date().toString()} +  ${logData}\n`;
//     await fsPromise.appendFile("log.txt", logData);
//   } catch (err) {
//     console.log(err);
//   }
// }

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "request-logging" },
  transports: [new winston.transports.File({ filename: "log.txt" })],
});

const loggerMiddleware = async (req, res, next) => {
  // Exclude logging for /signin and /signup routes
  if (!req.url.includes("/signin") && !req.url.includes("/signup")) {
    const logData = `${req.url} - ${JSON.stringify(req.body)}`;
    logger.info(logData);
  }
  next();
};

export default loggerMiddleware;
