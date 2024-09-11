const router = require('express').Router();
const apiRoutes = require('./api');

// Use `/api` for all API routes
router.use('/api', apiRoutes);

// Catch-all route for non-existent routes
router.use((req, res) => res.status(404).send('404 Route Not Found'));

module.exports = router;
