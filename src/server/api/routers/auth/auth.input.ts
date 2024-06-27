import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(1, 'Enter a password.'),
});

export type LoginInput = z.infer<typeof loginSchema>;
