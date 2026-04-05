import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextCore';
import type { AuthContextType } from '../context/AuthContextCore';

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
