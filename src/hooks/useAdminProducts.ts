import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productApi } from '../lib/api';

export const useAdminProducts = () => {
  return useQuery({
    queryKey: ['adminProducts'],
    queryFn: () => productApi.getProducts(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: productApi.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminProducts'] });
    },
  });
};
