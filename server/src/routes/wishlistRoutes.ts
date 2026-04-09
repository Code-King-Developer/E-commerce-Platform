import express from 'express';
import { 
  getWishlist, 
  addToWishlist, 
  removeFromWishlist, 
  clearWishlist 
} from '../controllers/wishlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, getWishlist);

router.route('/add')
  .post(protect, addToWishlist);

router.route('/remove/:productId')
  .delete(protect, removeFromWishlist);

router.route('/clear')
  .delete(protect, clearWishlist);

export default router;
