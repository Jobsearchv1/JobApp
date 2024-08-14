const express = require('express');
const router = express.Router();
const { getNotifications } = require('../controllers/notificationController.js');
const { authenticateUser } = require('../middleware/authMiddleware.js'); // Assuming you have a middleware for authentication

router.get('/', authenticateUser, getNotifications);

module.exports = router;
