import { z } from 'zod';

export const createProductSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tag: z.string().nullable().optional(),
  image: z.string().url('Main image must be a valid URL'),
  images: z.array(z.string().url()).optional(),
  alt: z.string().min(1, 'Alt text is required'),
  inStock: z.boolean().optional().default(true),
  sizes: z.array(z.string()).optional(),
  finishes: z.array(z.object({
    name: z.string(),
    hex: z.string(),
    outlineColor: z.string().optional(),
  })).optional(),
  dimensionsMaterials: z.array(z.string()).optional(),
  shippingReturns: z.array(z.string()).optional(),
  featuredReview: z.object({
    author: z.string(),
    date: z.string(),
    quote: z.string(),
  }).optional(),
});

export const updateProductSchema = createProductSchema.partial();
