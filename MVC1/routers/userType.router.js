const express = require('express');
const router = express.Router();
const auth = require('../utilis/auth');

const userTypeController = require('../controllers/userType.controller');

router.post('/', userTypeController.createUserType);
router.get('/', auth.authMW,userTypeController.getUserTypes);
router.get('/:id', userTypeController.getUserType);
router.put('/:id', userTypeController.updateUserType);
router.delete('/:id', userTypeController.deleteUserType);

module.exports = router;