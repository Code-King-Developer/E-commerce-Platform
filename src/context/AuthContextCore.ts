import { createContext } from 'react';
import type { User, AuthResponse, UpdateProfilePayload } from '../types/auth';

export interface AuthContextType {
  user: User | null | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  sendOtp: (payload: { email: string }) => Promise<AuthResponse>;
  isSendingOtp: boolean;
  verifyOtp: (payload: { email: string; otp: string }) => Promise<AuthResponse>;
  isVerifyingOtp: boolean;
  updateProfile: (payload: UpdateProfilePayload) => Promise<User>;
  isUpdatingProfile: boolean;
  logout: () => Promise<void>;
  isLoggingOut: boolean;
  refetchUser: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
