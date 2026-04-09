import express from 'express';
import { 
  getCart, 
  addToCart, 
  updateCartItem, 
  removeFromCart, 
  clearCart 
} from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply auth protection to all cart routes
router.use(protect);

router.route('/')
  .get(getCart);

router.route('/add')
  .post(addToCart);

router.route('/update/:productId')
  .put(updateCartItem);

router.route('/remove/:productId')
  .delete(removeFromCart);

router.route('/clear')
  .delete(clearCart);

export default router;
