import { createContext } from 'react';
import type { User, AuthResponse, UpdateProfilePayload, SendOtpPayload, VerifyOtpPayload } from '../types/auth';

export interface AuthContextType {
  user: User | null | undefined;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  sendOtp: (payload: SendOtpPayload) => Promise<AuthResponse>;
  isSendingOtp: boolean;
  verifyOtp: (payload: VerifyOtpPayload) => Promise<AuthResponse>;
  isVerifyingOtp: boolean;
  updateProfile: (payload: UpdateProfilePayload) => Promise<User>;
  isUpdatingProfile: boolean;
  logout: () => Promise<void>;
  isLoggingOut: boolean;
  refetchUser: () => Promise<any>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
