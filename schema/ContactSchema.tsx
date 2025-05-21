import { z } from "zod";

const ContactFormSchema = z.object({
  Fullname: z.string().min(1, "Full name is required"),
  Email: z.string().email("Invalid email address").min(1, "Email is required"),
  Subject: z.string().min(1, "Subject is required"),
  Message: z.string().min(1, "Message is required"),
});

//infer form data type from Zod schema
type ContactFormData = z.infer<typeof ContactFormSchema>;

//use 'export type ' when exporting TypeScript types
export { ContactFormSchema };
export type { ContactFormData };
