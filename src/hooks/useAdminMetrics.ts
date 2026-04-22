import { useQuery } from '@tanstack/react-query';
import { adminApi } from '../lib/api';

export const useAdminMetrics = () => {
  return useQuery({
    queryKey: ['adminStats'],
    queryFn: adminApi.getAdminStats,
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchInterval: 1000 * 60 * 5, // fetch every 5 minutes in background
  });
};
