import React, { useMemo } from 'react';
import type { ReactNode } from 'react';
import { useAdminAuth } from '../hooks/useAdminAuth';
import { AdminAuthContext } from './AdminAuthContextCore';

const AdminAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAdminAuth();

  const value = useMemo(() => ({
    ...auth,
  }), [auth]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export default AdminAuthProvider;
