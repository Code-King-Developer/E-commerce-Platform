import { Request, Response } from 'express';
import User from '../models/User.js';
import { redisConnection } from '../config/redis.js';
import { emailQueue } from '../queues/emailQueue.js';
import { generateToken } from '../utils/auth.js';

// @desc    Generate OTP and add to BullMQ for sending
// @route   POST /api/auth/send-otp
// @access  Public
export const sendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    // Generate 6-digit random code
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in Redis with 10-minute expiration
    // Key format: otp:email
    await redisConnection.set(`otp:${email}`, otpCode, 'EX', 600);

    // Add to BullMQ for background processing
    await emailQueue.add('send-otp', {
      to: email,
      otp: otpCode,
    });

    res.status(200).json({ message: 'Verification code sent to email' });
  } catch (error) {
    console.error('OTP Send Error:', error);
    res.status(500).json({ message: 'Failed to process verification code', error });
  }
};

// @desc    Verify OTP from Redis and login/register
// @route   POST /api/auth/verify-otp
// @access  Public
export const verifyOtp = async (req: Request, res: Response) => {
  const { email, code, name, biography, password } = req.body;

  try {
    // Get OTP from Redis
    const storedOtp = await redisConnection.get(`otp:${email}`);

    if (!storedOtp || storedOtp !== code) {
      return res.status(400).json({ message: 'Invalid or expired verification code' });
    }

    // Successful verification, delete from Redis
    await redisConnection.del(`otp:${email}`);

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Registration: Create new user if name is provided
      if (!name) {
        return res.status(400).json({ message: 'User not found. Please provide a name to register.' });
      }

      user = await User.create({
        name,
        email,
        biography,
        password: password || Math.random().toString(36).slice(-10),
      });
    }

    // Set Token in Cookie
    const token = generateToken(String(user._id));
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: 'Login successful',
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error('OTP Verify Error:', error);
    res.status(500).json({ message: 'Verification failed', error });
  }
};
