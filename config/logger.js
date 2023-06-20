const winston = require('winston');

// Define the logger configuration
const logger = winston.createLogger({
  level: 'error', // Set the log level to 'error' to log only errors
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Log errors to the console
    new winston.transports.File({ filename: 'error.log' }), // Log errors to a file
  ],
});

module.exports = logger;
