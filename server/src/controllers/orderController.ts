import { Request, Response } from 'express';
import Order from '../models/Order.js';
import { AuthRequest } from '../middleware/authMiddleware.js';
import { createOrderSchema } from '../schemas/orderSchemas.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    const validatedData = createOrderSchema.parse(req.body);

    const order = new Order({
      ...validatedData,
      user: authReq.user?._id,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (order) {
      // Check if user is owner of the order
      if (order.user._id.toString() !== authReq.user?._id.toString()) {
        return res.status(401).json({ message: 'Not authorized to view this order' });
      }
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    const orders = await Order.find({ user: authReq.user?._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
export const updateOrderToDelivered = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = new Date();
      order.status = 'Delivered';

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({}).populate('user', 'id name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
