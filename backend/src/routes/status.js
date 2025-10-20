const express = require('express');
const router = express.Router();

/**
 * GET /api/v1/status
 * Returns the current status of the API
 */
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is operational',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
