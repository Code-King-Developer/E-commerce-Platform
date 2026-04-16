import { useContext } from 'react';
import { AdminAuthContext } from '../context/AdminAuthContextCore';

export const useAdminAuthContext = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuthContext must be used within an AdminAuthProvider');
  }
  return context;
};
