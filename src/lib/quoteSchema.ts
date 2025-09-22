import { z } from "zod";

export const quoteSchema = z.object({
  pickupAddress: z.string().min(5, "Enter full pickup address"),
  dropoffAddress: z.string().min(5, "Enter full drop-off address"),
  commodity: z.string().min(2, "What are we hauling?"),
  length: z.coerce.number().positive("Length (ft)").max(200),
  width: z.coerce.number().positive("Width (ft)").max(30),
  weight: z.coerce.number().positive("Weight (lbs)").max(500000),
  notes: z.string().max(1000).optional(),
  contactName: z.string().min(2, "Your name"),
  phone: z.string().min(7, "Phone number"),
  email: z.string().email("Valid email required")
});
export type QuoteForm = z.infer<typeof quoteSchema>;


