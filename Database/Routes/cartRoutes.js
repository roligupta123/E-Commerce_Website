const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/:user', cartController.getCart);
router.post('/remove', cartController.removeItem);

module.exports = router;
