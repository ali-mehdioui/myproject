const express = require('express');

const user = require('../controllers/user-controller');
const router= express.Router();



router.post('/user', user.addUsers);
router.post('/aut',user.auth);

module.exports=router;