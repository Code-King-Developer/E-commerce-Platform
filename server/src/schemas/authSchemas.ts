import { z } from 'zod';

export const sendOtpSchema = z.object({
  body: z.object({
    email: z.string().email('Not a valid email address'),
  }),
});

export const verifyOtpSchema = z.object({
  body: z.object({
    email: z.string().email('Not a valid email address'),
    code: z.string().length(6, 'Verification code must be 6 digits'),
    name: z.string().optional(),
    biography: z.string().max(500).optional(),
  }),
});
