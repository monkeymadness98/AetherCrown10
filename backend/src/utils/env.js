const { cleanEnv, str, port } = require('envalid');

/**
 * Validates and cleans environment variables
 * Throws an error if required variables are missing or invalid
 */
const validateEnv = () => {
  return cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production', 'test'],
      default: 'development',
    }),
    PORT: port({ default: 5000 }),
    FRONTEND_URL: str({
      default: '',
      desc: 'Frontend URL for CORS configuration',
    }),
  });
};

module.exports = validateEnv;
