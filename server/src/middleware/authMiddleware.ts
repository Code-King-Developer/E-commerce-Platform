import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User.js';

export interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const authReq = req as AuthRequest;
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretpassword123') as jwt.JwtPayload;

      const user = await User.findById(decoded.id).select('-password -salt');

      if (!user) {
        return res.status(401).json({ message: 'User not found with this token' });
      }

      authReq.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
