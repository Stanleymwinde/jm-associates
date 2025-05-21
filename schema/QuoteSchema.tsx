import { z } from "zod";

const QuoteFormSchema = z.object({
  Fullname: z.string().min(3, "Full name is required"),
  Email: z.string().email("Invalid email address").min(1, "Email is required"),
  Company: z.string().min(1, "Company name is required"),
  Phone: z.string().min(1, "Phone number is required"),
  Message: z.string().min(1, "Message is required"),
});

//infer form data type from Zod schema
type QuoteFormData = z.infer<typeof QuoteFormSchema>;

//use 'export type ' when exporting TypeScript types
export { QuoteFormSchema };
export type { QuoteFormData };
