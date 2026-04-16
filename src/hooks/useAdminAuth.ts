import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../lib/api';
import type { AdminLoginPayload } from '../types/auth';

export const useAdminAuth = () => {
  const queryClient = useQueryClient();

  // Profile query
  const {
    data: admin,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['adminUser'],
    queryFn: adminApi.getAdminProfile,
    retry: false, // Don't retry on failure (likely 401)
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (payload: AdminLoginPayload) => adminApi.loginAdmin(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminUser'] });
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: adminApi.logoutAdmin,
    onSuccess: () => {
      queryClient.setQueryData(['adminUser'], null);
      queryClient.resetQueries({ queryKey: ['adminUser'] });
    },
  });

  return {
    admin,
    isLoading,
    isAdminAuthenticated: !!admin,
    error,
    loginAdmin: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    logoutAdmin: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
    refetchAdmin: refetch,
  };
};
