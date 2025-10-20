// Load environment variables
require('dotenv').config();

const app = require('./src/app');
const logger = require('./src/utils/logger');
const validateEnv = require('./src/utils/env');

// Validate environment variables on startup
let env;
try {
  env = validateEnv();
  logger.info('Environment variables validated successfully');
} catch (error) {
  logger.error('Environment validation failed:', error);
  process.exit(1);
}

const PORT = env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
  logger.info(`Backend running on port ${PORT}`);
  logger.info(`Environment: ${env.NODE_ENV}`);
  logger.info(`Frontend URL: ${env.FRONTEND_URL || 'Not configured'}`);
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  logger.info(`${signal} received, shutting down gracefully`);
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
