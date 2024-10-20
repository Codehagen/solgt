import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const propertySchema = z.object({
  id: z.string(),
  address: z.string(),
  city: z.string(),
  matrikkel: z.string(),
  floor: z.string(),
  bra: z.number(),
  price: z.number(),
  yield: z.number(),
  status: z.enum(["godt_kjop", "darlig_kjop"]),
});

export type Property = z.infer<typeof propertySchema>;
