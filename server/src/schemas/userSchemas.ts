import { z } from 'zod';

export const updateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Invalid email address').optional(),
  biography: z.string().max(500, 'Biography cannot exceed 500 characters').optional(),
});

export type UpdateUserPayload = z.infer<typeof updateUserSchema>;
