import { Request, Response } from 'express';
import User from '../models/User.js';
import { generateToken } from '../utils/auth.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  if (!authReq.user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const user = await User.findById(authReq.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      biography: user.biography,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// @desc    Handle OAuth Success (set cookie and redirect)
export const oauthSuccess = (req: Request, res: Response) => {
  const authReq = req as AuthRequest;
  if (!authReq.user) {
    return res.redirect(`${process.env.CLIENT_URL || 'http://localhost:3000'}/login?error=auth_failed`);
  }

  const token = generateToken(String(authReq.user._id));

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  // Redirect to frontend dashboard or home
  res.redirect(process.env.CLIENT_URL || 'http://localhost:3000');
};
