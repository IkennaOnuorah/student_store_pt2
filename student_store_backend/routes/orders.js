const express = require("express");
const Order = require("../models/order.js");
const security = require("../middleware/security");

const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //list all orders
    const { user } = res.locals;
    const orders = await Order.listOrdersForUser(user);
    return res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    //create new order
    const { user } = res.locals;
    const order = await Order.createOrder({ user, order: req.body });
    return res.status(201).json({ order });
  } catch (err) {
    next(err);
  }
});

router.get("/:orderId", async (req, res, next) => {
  try {
    //fetch order by id
  } catch (err) {
    next(err);
  }
});

module.exports = router;