import { createContext } from 'react';
import type { AdminUser, AdminLoginPayload } from '../types/auth';

export interface AdminAuthContextType {
  admin: AdminUser | null | undefined;
  isLoading: boolean;
  isAdminAuthenticated: boolean;
  error: Error | null;
  loginAdmin: (payload: AdminLoginPayload) => Promise<AdminUser>;
  isLoggingIn: boolean;
  logoutAdmin: () => Promise<void>;
  isLoggingOut: boolean;
  refetchAdmin: () => Promise<any>;
}

export const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);
