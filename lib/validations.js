import { z } from "zod";

export const PosSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  numbers: z.array(z.string().min(1).max(3)).min(1).max(10),
});
