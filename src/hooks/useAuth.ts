import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../lib/api';
import type { SendOtpPayload, VerifyOtpPayload, UpdateProfilePayload } from '../types/auth';

export const useAuth = () => {
  const queryClient = useQueryClient();

  // Profile query
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getProfile,
    retry: false, // Don't retry auth profile on failure
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Login (send OTP) mutation
  const sendOtpMutation = useMutation({
    mutationFn: (payload: SendOtpPayload) => authApi.sendOtp(payload),
  });

  // Verify OTP mutation
  const verifyOtpMutation = useMutation({
    mutationFn: (payload: VerifyOtpPayload) => authApi.verifyOtp(payload),
    onSuccess: () => {
      // Invalidate the user query to refetch after login
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  // Update Profile mutation
  const updateProfileMutation = useMutation({
    mutationFn: (payload: UpdateProfilePayload) => {
      if (!user?._id) throw new Error('User not authenticated');
      return authApi.updateUser(user._id, payload);
    },
    onSuccess: (updatedUser) => {
      // Optimistically update the cache or just invalidate
      queryClient.setQueryData(['user'], updatedUser);
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear the user from cache
      queryClient.setQueryData(['user'], null);
      // Invalidate all queries to ensure data security
      queryClient.resetQueries();
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    error,
    sendOtp: sendOtpMutation.mutateAsync,
    isSendingOtp: sendOtpMutation.isPending,
    verifyOtp: verifyOtpMutation.mutateAsync,
    isVerifyingOtp: verifyOtpMutation.isPending,
    updateProfile: updateProfileMutation.mutateAsync,
    isUpdatingProfile: updateProfileMutation.isPending,
    logout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
    refetchUser: refetch,
  };
};

