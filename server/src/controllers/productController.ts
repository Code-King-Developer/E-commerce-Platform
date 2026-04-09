import { Request, Response } from 'express';
import Product from '../models/Product.js';
import { createProductSchema, updateProductSchema } from '../schemas/productSchemas.js';
import { getCachedData, setCachedData, invalidateCache } from '../utils/cacheUtils.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response) => {
  const { category } = req.query;
  const cacheKey = category ? `products:cat:${category.toString().toLowerCase()}` : 'products:all';
  
  try {
    const cachedProducts = await getCachedData(cacheKey);
    if (cachedProducts) {
      return res.json(cachedProducts);
    }

    const filter = category 
      ? { category: { $regex: new RegExp(`^${category}$`, 'i') } } 
      : {};

    const products = await Product.find(filter);
    await setCachedData(cacheKey, products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response) => {
  const cacheKey = `products:id:${req.params.id}`;
  try {
    const cachedProduct = await getCachedData(cacheKey);
    if (cachedProduct) {
      return res.json(cachedProduct);
    }

    const product = await Product.findById(req.params.id);

    if (product) {
      await setCachedData(cacheKey, product);
       res.json(product);
    } else {
       res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = createProductSchema.parse(req.body);
    
    const product = new Product(validatedData);

    const createdProduct = await product.save();
    
    // Invalidate product caches
    await invalidateCache(['products:all']);
    
    res.status(201).json(createdProduct);
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = updateProductSchema.parse(req.body);
    
    const product = await Product.findById(req.params.id);

    if (product) {
      Object.assign(product, validatedData);
      const updatedProduct = await product.save();
      
      // Invalidate cache
      await invalidateCache(['products:all', `products:id:${req.params.id}`]);
      
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
      // Invalidate cache
      await invalidateCache(['products:all', `products:id:${req.params.id}`]);
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
