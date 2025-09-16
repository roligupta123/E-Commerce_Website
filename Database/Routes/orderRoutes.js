const express = require('express');
const router = express.Router();
const OrderRouter = require('../Controllers/orderController');



router.route("/")
  .post(protect, createOrder)
  .get(protect, admin, getOrders);

router.route("/:id").get(protect, getOrderById);

export default router;