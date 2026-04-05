import { Router } from 'express';
import { getProfile } from '../controllers/authController.js';
import { sendOtp, verifyOtp } from '../controllers/otpController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validate.js';
import { sendOtpSchema, verifyOtpSchema } from '../schemas/authSchemas.js';

const router = Router();

// Standard login and signup are removed in favor of OTP-only flow
router.post('/send-otp', validate(sendOtpSchema), sendOtp);
router.post('/verify-otp', validate(verifyOtpSchema), verifyOtp);

router.get('/profile', protect, getProfile);

export default router;
