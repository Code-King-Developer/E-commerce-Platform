import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { orderApi } from '../lib/api';

export const useAdminOrders = () => {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery({
    queryKey: ['adminOrders'],
    queryFn: orderApi.getAllOrders,
    staleTime: 1000 * 60, // 1 minute
  });

  const deliverMutation = useMutation({
    mutationFn: (orderId: string) => orderApi.deliverOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminOrders'] });
    },
  });

  return {
    ...ordersQuery,
    deliverOrder: deliverMutation.mutateAsync,
    isDelivering: deliverMutation.isPending,
  };
};
