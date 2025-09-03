import { literal, z } from "zod";


export const registerSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Please enter your email",
    })
    .pipe(z.email({ message: "Email address is not correct format" })),
  password: z
    .string()
    .trim()
    .min(1, { message: "Please enter your password" })
    .min(6, { message: "Password must be at least 6 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, {
      message: "Please enter your phone number",
    })
    .regex(/^0\d{9}$/, {
      message: "Phone number is not correct format",
    }),
  address: z.string().trim().min(1, {
    message: "Please enter your address",
  }),
  country: z.string().trim().min(1, { message: "Please enter your country" }),
  level: z.union([literal(0), literal(1)]),
  avatar: z
    .custom<FileList>()
    .refine((files) => {
      const file = files?.[0];
      return !!file;
    }, "Please add a profile picture")
    .refine((files) => {
      const file = files?.[0];
      const maxSize = 1024 * 1024;
      return (file?.size ?? 0) <= maxSize;
    }, "Maximum file size is 1MB")
    .refine((files) => {
      const file = files?.[0];
      return ["image/jpeg", "image/png"].includes(file?.type || "");
    }, "Only JPG/PNG images are accepted"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
