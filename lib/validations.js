import { z } from "zod";

export const PosSchema = z.object({
  serie: z.string(),
  numbers: z.array(z.string().min(1).max(3)).min(1).max(10),
});
