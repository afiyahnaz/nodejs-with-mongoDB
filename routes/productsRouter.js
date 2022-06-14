const express = require('express');
const productsCtrl = require('../controllers/productsctrl');

const router   = express.Router();



router.get('/',productsCtrl.get);


module.exports = router;