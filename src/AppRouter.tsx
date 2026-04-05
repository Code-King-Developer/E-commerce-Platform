import { useEffect } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import { useAuthContext } from './hooks/useAuthContext'

export function AppRouter() {
  const { isAuthenticated, isLoading } = useAuthContext();

  // Update router context whenever auth state changes
  useEffect(() => {
    router.update({
      context: {
        isAuthenticated: !!isAuthenticated,
      },
    })
  }, [isAuthenticated])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="font-headline text-primary animate-pulse tracking-widest text-xs uppercase">
          Curating your experience...
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}
