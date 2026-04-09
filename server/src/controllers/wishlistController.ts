import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Wishlist from '../models/Wishlist.js';
import Product from '../models/Product.js';
import { addToWishlistSchema } from '../schemas/wishlistSchemas.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

// @desc    Get user's wishlist
// @route   GET /api/wishlist
// @access  Private
export const getWishlist = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    let wishlist = await Wishlist.findOne({ user: authReq.user._id }).populate('products');
    
    if (!wishlist) {
      wishlist = await Wishlist.create({ user: authReq.user._id, products: [] });
    }
    
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Add product to wishlist
// @route   POST /api/wishlist/add
// @access  Private
export const addToWishlist = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const validatedData = addToWishlistSchema.parse(req.body);
    const { productId } = validatedData;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let wishlist = await Wishlist.findOne({ user: authReq.user._id });

    if (!wishlist) {
      wishlist = new Wishlist({ user: authReq.user._id, products: [] });
    }

    // Check if product already exists in wishlist
    if (wishlist.products.some(id => id.toString() === productId)) {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }

    wishlist.products.push(product._id as mongoose.Types.ObjectId);
    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Remove product from wishlist
// @route   DELETE /api/wishlist/remove/:productId
// @access  Private
export const removeFromWishlist = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const { productId } = req.params;

    const wishlist = await Wishlist.findOne({ user: authReq.user._id });

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    wishlist.products = wishlist.products.filter(
      (id) => id.toString() !== productId
    );

    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Clear wishlist
// @route   DELETE /api/wishlist/clear
// @access  Private
export const clearWishlist = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  try {
    if (!authReq.user) return res.status(401).json({ message: 'Not authorized' });
    const wishlist = await Wishlist.findOne({ user: authReq.user._id });

    if (wishlist) {
      wishlist.products = [];
      await wishlist.save();
    }

    res.json({ message: 'Wishlist cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
