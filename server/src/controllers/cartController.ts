import { Request, Response } from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { addToCartSchema, updateCartItemSchema } from '../schemas/cartSchemas.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

const MAX_QTY = 5;

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
export const getCart = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    let cart = await Cart.findOne({ user: authReq.user._id }).populate('items.product');
    
    if (!cart) {
      cart = await Cart.create({ user: authReq.user._id, items: [] });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
export const addToCart = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const validatedData = addToCartSchema.parse(req.body);
    const { productId, qty, selectedSize, selectedFinish } = validatedData;
// ... (repeating the logic with authReq.user)

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: authReq.user._id });

    if (!cart) {
      cart = new Cart({ user: authReq.user._id, items: [] });
    }

    // Check if item already exists in cart with same variants
    const existingItemIndex = cart.items.findIndex(
      (item) => 
        item.product.toString() === productId && 
        item.selectedSize === selectedSize && 
        item.selectedFinish === selectedFinish
    );

    if (existingItemIndex > -1) {
      // Update quantity
      const newQty = cart.items[existingItemIndex].qty + qty;
      if (newQty > MAX_QTY) {
        return res.status(400).json({ message: `Maximum ${MAX_QTY} items allowed per acquisition` });
      }
      cart.items[existingItemIndex].qty = newQty;
    } else {
      // Add new item
      cart.items.push({
        product: product._id,
        name: product.title,
        image: product.image,
        price: product.price,
        qty,
        selectedSize,
        selectedFinish
      } as any);
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/update/:productId
// @access  Private
export const updateCartItem = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const { qty } = updateCartItemSchema.parse(req.body);
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: authReq.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex > -1) {
      if (qty > MAX_QTY) {
        return res.status(400).json({ message: `Maximum ${MAX_QTY} items allowed per acquisition` });
      }
      cart.items[itemIndex].qty = qty;
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/remove/:productId
// @access  Private
export const removeFromCart = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const { productId } = req.params;
    const { selectedSize, selectedFinish } = req.query;

    const cart = await Cart.findOne({ user: authReq.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      (item) => 
        !(item.product.toString() === productId && 
          item.selectedSize === selectedSize && 
          item.selectedFinish === selectedFinish)
    ) as any;

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Clear cart
// @route   DELETE /api/cart/clear
// @access  Private
export const clearCart = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const cart = await Cart.findOne({ user: authReq.user._id });

    if (cart) {
      cart.items = [];
      await cart.save();
    }

    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
