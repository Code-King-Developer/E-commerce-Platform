import express from 'express';
import { getUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @route   GET /api/users/:id
 * @desc    Get single user
 * @access  Private
 */
router.get('/:id', protect, getUser);

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Private
 */
router.get('/', protect, getUsers);

/**
 * @route   PUT /api/users/:id
 * @desc    Update user
 * @access  Private
 */
router.put('/:id', protect, updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete user
 * @access  Private
 */
router.delete('/:id', protect, deleteUser);

export default router;
