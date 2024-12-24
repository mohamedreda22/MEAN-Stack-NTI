const express = require('express');
const router = express.Router();

const userTypeController = require('../controllers/userType.controller');

router.post('/', userTypeController.createUserType);
router.get('/', userTypeController.getUserTypes);
router.get('/:id', userTypeController.getUserType);
router.put('/:id', userTypeController.updateUserType);
router.delete('/:id', userTypeController.deleteUserType);

module.exports = router;