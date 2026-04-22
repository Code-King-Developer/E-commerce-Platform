import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { adminProtect } from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(adminProtect, createProduct);

router.route('/:id')
  .get(getProductById)
  .put(adminProtect, updateProduct)
  .delete(adminProtect, deleteProduct);

export default router;
