import { Router } from 'express';
import passport from 'passport';
import { oauthSuccess } from '../controllers/authController.js';
import '../config/passport.js'; // Ensure passport is configured

const router = Router();

// @desc    Auth with Google
// @route   GET /api/auth/google
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// @desc    Google auth callback
// @route   GET /api/auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  oauthSuccess
);

// @desc    Auth with Apple
// @route   POST /api/auth/apple
// @route   GET /api/auth/apple
router.get(
  '/apple',
  passport.authenticate('apple')
);

// @desc    Apple auth callback
// @route   POST /api/auth/apple/callback
router.post(
  '/apple/callback',
  passport.authenticate('apple', { session: false }),
  oauthSuccess
);

export default router;
