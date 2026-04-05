import { Request, Response } from 'express';
import User from '../models/User.js';
import { updateUserSchema } from '../schemas/userSchemas.js';
import { getCachedData, setCachedData, invalidateCache } from '../utils/cacheUtils.js';

// @desc    Get all users
// @route   GET /api/users
// @access  Private
export const getUsers = async (req: Request, res: Response) => {
  const cacheKey = 'users:all';
  try {
    const cachedUsers = await getCachedData(cacheKey);
    if (cachedUsers) {
      return res.json(cachedUsers);
    }

    const users = await User.find().select('-password -salt');
    await setCachedData(cacheKey, users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private
export const getUser = async (req: Request, res: Response) => {
  const cacheKey = `users:id:${req.params.id}`;
  try {
    const cachedUser = await getCachedData(cacheKey);
    if (cachedUser) {
      return res.json(cachedUser);
    }

    const user = await User.findById(req.params.id).select('-password -salt');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await setCachedData(cacheKey, user);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
export const updateUser = async (req: Request, res: Response) => {
  try {
    const validatedData = updateUserSchema.parse(req.body);
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: validatedData },
      { new: true, runValidators: true }
    ).select('-password -salt');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Invalidate cache
    await invalidateCache(['users:all', `users:id:${req.params.id}`]);

    res.json(user);
  } catch (error) {
    if (error instanceof Error && 'name' in error && error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation failed', errors: error });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Invalidate cache
    await invalidateCache(['users:all', `users:id:${req.params.id}`]);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
