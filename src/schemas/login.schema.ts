import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .toLowerCase()
    .trim()
    .min(1, { message: "Please enter your email" })
    .pipe(z.email({ message: "Email address is not correct format" })),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginSchema = z.infer<typeof loginSchema>