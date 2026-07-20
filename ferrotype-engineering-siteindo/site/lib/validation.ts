import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Mohon masukkan nama lengkap Anda"),
  company: z.string().min(2, "Mohon masukkan nama perusahaan"),
  email: z.string().email("Mohon masukkan alamat email yang valid"),
  phone: z.string().min(6, "Mohon masukkan nomor telepon yang valid"),
  whatsapp: z.string().optional(),
  projectType: z.string().min(1, "Mohon pilih jenis proyek"),
  message: z.string().min(20, "Mohon jelaskan proyek Anda minimal 20 karakter"),
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
  "Lainnya",
];
