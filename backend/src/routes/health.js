const express = require('express');
const router = express.Router();
const packageJson = require('../../package.json');

/**
 * GET /health
 * Health check endpoint for monitoring and load balancers
 * Returns uptime, version, environment, and timestamp
 */
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    version: packageJson.version,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
