const express = require('express');
const router = express.Router();

const userCtrl = require('./controllers/user');

router.get('/cities', userCtrl.getCities);
router.post('/cities', userCtrl.postCity);

router.get('/user', userCtrl.getUserId);

module.exports = router;
