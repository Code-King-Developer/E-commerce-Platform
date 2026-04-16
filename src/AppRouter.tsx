import { useMemo } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import { useAuthContext } from './hooks/useAuthContext'
import { useAdminAuthContext } from './hooks/useAdminAuthContext'

export function AppRouter() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const { isAdminAuthenticated, isLoading: isAdminLoading } = useAdminAuthContext();

  const context = useMemo(() => ({
    isAuthenticated: !!isAuthenticated,
    isAdminAuthenticated: !!isAdminAuthenticated,
  }), [isAuthenticated, isAdminAuthenticated]);

  if (isLoading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="font-headline text-primary animate-pulse tracking-widest text-xs uppercase">
          Curating your experience...
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} context={context} />;
}
