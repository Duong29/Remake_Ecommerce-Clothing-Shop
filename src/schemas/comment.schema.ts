import { z } from "zod";
export const commentSchema = z.object({
  comment: z.string().trim().min(1, { message: "Please enter comment" }),
});
export type CommentSchema = z.infer<typeof commentSchema>;
