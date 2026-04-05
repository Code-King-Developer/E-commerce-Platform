import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretpassword123';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRE as jwt.SignOptions['expiresIn'],
  });
};

export const verifyToken = (token: string): string | jwt.JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};
