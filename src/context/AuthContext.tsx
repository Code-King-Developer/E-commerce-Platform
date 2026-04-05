import React, { useMemo } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthContext } from './AuthContextCore';

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth();

  const value = useMemo(() => ({
    ...auth,
  }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
