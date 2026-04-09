import { z } from 'zod';

const shippingAddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

const orderItemSchema = z.object({
  product: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Product ID format'),
  name: z.string().min(1, 'Product name is required'),
  qty: z.number().int().min(1, 'Quantity must be at least 1'),
  image: z.string().url('Product image must be a valid URL'),
  price: z.number().min(0, 'Price must be a positive number'),
});

export const createOrderSchema = z.object({
  orderItems: z.array(orderItemSchema).min(1, 'Order must contain at least one item'),
  shippingAddress: shippingAddressSchema,
  paymentMethod: z.string().min(1, 'Payment method is required'),
  taxPrice: z.number().min(0).optional().default(0),
  shippingPrice: z.number().min(0).optional().default(0),
  totalPrice: z.number().min(0),
});

export const updateOrderStatusSchema = z.object({
  status: z.enum(['Processing', 'Shipped', 'Delivered', 'Cancelled']),
  deliveredAt: z.string().optional(),
});
