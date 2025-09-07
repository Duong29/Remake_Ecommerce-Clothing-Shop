import { z } from "zod";

const MAX_SIZE = 1024 * 1024
export const registerSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
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
  avatar: z
  .instanceof(File)
  .superRefine((file, ctx) => {
    if (!file) {
      ctx.addIssue({ code: "custom", message: "Please add a profile picture" });
      return; // return để không check phía dưới vì nếu không có file thì không thể đọc file.type hoặc file.size
    }
    if (file.size > MAX_SIZE) {
      ctx.addIssue({ code: "custom", message: "Maximum file size is 1MB" });
    }
    if (!["image/jpeg", "image/png"].includes(file.type)) { 
      ctx.addIssue({ code: "custom", message: "Only JPG/PNG are accepted" });
    }
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
