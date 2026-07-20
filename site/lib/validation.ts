import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  whatsapp: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Please describe your project in at least 20 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const projectTypes = [
  "Mechanical Engineering",
  "Product Development",
  "Reverse Engineering",
  "DFMA / Value Engineering",
  "Manufacturing Engineering",
  "CNC Machining / Fabrication",
  "Mould Manufacturing",
  "Industrial Automation",
  "PLC / SCADA",
  "Machine Retrofit",
  "Engineering Consulting",
  "Engineering Training",
  "Other",
];
