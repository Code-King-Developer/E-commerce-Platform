import { Request, Response } from 'express';
import Admin from '../models/Admin.js';
import { generateToken } from '../utils/auth.js';
import { AdminAuthRequest } from '../middleware/adminAuthMiddleware.js';

// @desc    Register a new admin
// @route   POST /api/admin/register
// @access  Public (In production, you likely protect this or remove it)
export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      name,
      email,
      password,
      role: role || 'admin',
    });

    if (admin) {
      const token = generateToken(String(admin._id));

      res.cookie('adminToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      res.status(201).json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Admin login
// @route   POST /api/admin/login
// @access  Public
export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select('+password');

    if (admin && (await admin.comparePassword(password))) {
      const token = generateToken(String(admin._id));

      res.cookie('adminToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// @desc    Get admin profile
// @route   GET /api/admin/me
// @access  Private (Admin only)
export const getAdminProfile = async (req: Request, res: Response) => {
  const authReq = req as AdminAuthRequest;
  
  if (!authReq.admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  res.json({
    _id: authReq.admin._id,
    name: authReq.admin.name,
    email: authReq.admin.email,
    role: authReq.admin.role,
  });
};

// @desc    Logout admin
// @route   POST /api/admin/logout
// @access  Private (Admin only)
export const logoutAdmin = (req: Request, res: Response) => {
  res.cookie('adminToken', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Admin logged out successfully' });
};
