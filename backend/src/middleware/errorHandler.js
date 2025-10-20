const logger = require('../utils/logger');

/**
 * Global Error Handler Middleware
 * Catches all errors and returns appropriate responses
 */
const errorHandler = (err, req, res, _next) => {
  // Log the error
  logger.error(err.message, { stack: err.stack, url: req.originalUrl });

  // Determine status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: err.message,
    // Only show stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
