import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(2, "Please enter the required service"),
  message: z.string().min(10, "Please describe the plumbing problem"),
});

export type ContactForm = z.infer<typeof ContactSchema>;