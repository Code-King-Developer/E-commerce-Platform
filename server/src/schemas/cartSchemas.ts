import { z } from 'zod';

export const addToCartSchema = z.object({
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid product ID'),
  qty: z.number().int().positive('Quantity must be at least 1').max(5, 'Maximum 5 items allowed per acquisition'),
  selectedSize: z.string().optional(),
  selectedFinish: z.string().optional(),
});

export const updateCartItemSchema = z.object({
  qty: z.number().int().positive('Quantity must be at least 1').max(5, 'Maximum 5 items allowed per acquisition'),
});
