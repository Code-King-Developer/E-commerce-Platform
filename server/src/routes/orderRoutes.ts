import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';
import { adminProtect } from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, addOrderItems)
  .get(adminProtect, getOrders);

router.route('/myorders')
  .get(protect, getMyOrders);

router.route('/:id')
  .get(protect, getOrderById);

router.route('/:id/pay')
  .put(protect, updateOrderToPaid);

router.route('/:id/deliver')
  .put(adminProtect, updateOrderToDelivered);

export default router;
