const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser, updateUser, deleteUser, getAllUsers } = require('../controllers/userController.js');

// Ensure these functions are defined in your userController.js
router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);
module.exports = router;
