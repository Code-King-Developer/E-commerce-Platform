import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Admin, { IAdmin } from '../models/Admin.js';

export interface AdminAuthRequest extends Request {
  admin?: IAdmin;
}

export const adminProtect = async (req: Request, res: Response, next: NextFunction) => {
  const authReq = req as AdminAuthRequest;
  let token;

  // Retrieve token from Authorization header or cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.adminToken) {
    token = req.cookies.adminToken;
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretpassword123') as jwt.JwtPayload;

      const admin = await Admin.findById(decoded.id).select('-password -salt');

      if (!admin) {
        return res.status(401).json({ message: 'Admin not found with this token' });
      }

      authReq.admin = admin;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized as admin, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized as admin, no token' });
  }
};
